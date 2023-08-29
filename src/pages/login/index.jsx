import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../api";
import { useApplicationContext } from "../../context/ApplicationContext.tsx";
import { hasSession } from "../../Session";
import "./index.css";

const loginErrorList = {
    401: "Usuário ou Senha incorretos.",
  };
  

export const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loginError, setLoginError ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const { user, setUserAction } = useApplicationContext();
    const router = useHistory();
    const { state } = useLocation();

    useEffect(() => {
        setLoginError("");
    }, [email, password]);

    useEffect(() => {
        if (hasSession()) {
          router.push(state?.prevPath ? state?.prevPath : "/");
        }
      }, [user]);
    

    const submit = async (authorization) => {
        setIsLoading(true);
        try {
            const data = await api.post("/login", {
                email: email,
                password: password
            })
            console.log(data);
            setIsLoading(false);
            setUserAction({
                type: "login",
                payload: { userData: data.data, token: data.data }
            });
        } catch (e) {
            console.log(e.response.data);
            setLoginError(
                loginErrorList[e.response?.status] ?? "Algo deu errado."
            );
            setIsLoading(false);
        }
    }

    return (
        <div className="container-inputs">
            <div className="inputs-container">
                <img src="./image/ignite.png" alt="Logo-Ignite" />
                <div className="inputs">
                    <FiUser />
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="inputs">
                    <AiOutlineLock />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                

                <Button
                    isLoading={isLoading}
                    value="Entrar"
                    onClick={() => submit(email + ":" + password)}
                    // loadingText="Entrando"
                />
                <p>{loginError}</p>
                <p>Powered By <strong>Ignite Park&Go</strong></p>
            </div>
        </div>
    )
}