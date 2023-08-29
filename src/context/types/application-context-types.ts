import { Dispatch } from "react";

export type UserTypes =
  | "SUPER"
  | "PROPRIETARIO"
  | "USUARIO"

export interface User {
  isLogged: boolean;
  userData: Partial<{
    companyId: number;
    companyName: string;
    name: string;
    type: UserTypes;
  }>;
}

export interface ContextProps {
  setUserAction: Dispatch<UserActions>;
  user: User;
  isLogging: boolean;
  // isMenuOpen: boolean;
  // onToggleMenu: () => void;
}

export interface UserOperations {
  login: "login";
  logout: "logout";
}
export type UserActions =
  | {
      type: "login";
      payload: {
        token: string;
        userData: User["userData"];
      };
    }
  | {
      type: "logout";
      payload?: undefined;
    };
