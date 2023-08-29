import { useHistory } from "react-router-dom";
import { useApplicationContext } from "../../context/ApplicationContext.tsx";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import "./index.css";

export const MenuSuperior = () => {
    const { user, setUserAction } = useApplicationContext();
    const router = useHistory();

    return (
        <div className="container-profile">
            <AiOutlineMenu size={20} onClick={() => alert("oi")} className="menu-hamburguer" />
            <div className="button-user">
                <AiOutlineUser size={20} />
                <span>Leonardo Sell</span>
            </div>
            <div
                className="button-exit"
                onClick={() => {
                    setUserAction({ type: "logout" });
                    router.push("/login");
                }}
            >
                <RxExit size={20} />
                <span>Sair</span>
            </div>
        </div>
    )
}