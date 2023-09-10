import { useHistory } from "react-router-dom";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { getUserLogged, removeToken, getToken, removeUserLogged } from "../../Session";
import { api } from "../../api";
import "./MenuSuperior.css";
import { useEffect, useState } from "react";

export const MenuSuperior = () => {
    const router = useHistory();
    const [ userLogged, setUserLogged ] = useState([]);

    const getUser = async () => {
        const data = await api.get(`/user/${getUserLogged()}`, { headers: { "Authorization": `Bearer ${getToken()}` } });
        setUserLogged(data.data);
    }

    const saida = () => {
        removeToken();
        removeUserLogged();
        router.push("/");
    }

    useEffect(() => {
        getUser();
    },[])

    return (
        <div className="container-profile">
            <AiOutlineMenu size={20} onClick={() => alert("oi")} className="menu-hamburguer" />
            <div className="button-user-profile">
                <AiOutlineUser size={20} />
                <span>{userLogged.name}</span>
            </div>
            <div
                className="button-exit"
                onClick={() => saida()}
            >
                <RxExit size={20} />
                <span>Sair</span>
            </div>
        </div>
    )
}