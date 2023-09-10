import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../api";
import { setSession, setUserLogged } from "../../Session";
import "./index.css";  

export const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const router = useHistory();
    

    const submit = async () => {
        try {
            const data = await api.post("/login", {
                email: email,
                password: password
            });
            setSession(data.data);
            setUserLogged(email);
            router.push("/inicio");
        } catch (e) {
            console.log(e.response.data);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "error",
                title: e.response.data,
            });
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
                    onClick={() => submit(email + ":" + password)}
                >
                    Entrar
                </Button>
                <p>Powered By <strong>Ignite Park&Go</strong></p>
            </div>
        </div>
    )
}