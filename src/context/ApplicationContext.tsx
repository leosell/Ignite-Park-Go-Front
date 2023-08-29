import React from "react";
import { api } from "../api";
import { useHistory } from "react-router-dom";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getToken, hasSession, removeToken, setSession } from "../Session.js";
import {
  ContextProps,
  User,
  UserActions,
  UserOperations,
} from "./types/application-context-types";

const initialValues: ContextProps = {
  setUserAction: () => undefined,
  user: { isLogged: false, userData: {} },
  isLogging: true,
  // isMenuOpen: true,
  // onToggleMenu: () => undefined,
};

const applicationContext = createContext<ContextProps>(initialValues);

const initialState = { isLogged: false, userData: {} };

const userOperations: UserOperations = {
  login: "login",
  logout: "logout",
};

function reducer(state: User, action: UserActions) {
  switch (action.type) {
    case userOperations.login:
      const { token, userData } = action.payload;
      setSession(token);
      return { ...state, userData, isLogged: true };
    case userOperations.logout:
      removeToken();
      return { ...state, userData: {}, isLogged: false };
    default:
      return state;
  }
}

export const ApplicationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUserAction] = useReducer(reducer, initialState);
  const [isLogging, setIsLogging] = useState(true);
  const router = useHistory();

  useEffect(() => {
    const thisRouter =
      window.location.pathname !== "/login" ? window.location.pathname : null;
    if (!hasSession())
      router.push({ pathname: "/login", state: { prevPath: thisRouter } });
    else {
      const login = async () => {
        try {
          const response = await api.get("/validation", {
            headers: { Authorization: `Bearer ${getToken()}` },
          });
          setUserAction({
            type: "login",
            payload: { token: getToken(), userData: response.data },
          });
        } catch {
          removeToken();
          router.push({
            pathname: "/login",
            state: { prevPath: thisRouter },
          });
        } finally {
          setIsLogging(false);
        }
      };
      login();
    }
  }, []);

  return (
    <applicationContext.Provider
      value={{ setUserAction, user, isLogging }}
    >
      {children}
    </applicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const context = useContext(applicationContext);
  if (context === undefined)
    throw new Error(
      "useApplicationContext must be used within a ApplicationContextProvider"
    );
  return context;
};
