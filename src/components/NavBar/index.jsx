import { useHistory } from "react-router-dom";
import { useApplicationContext } from "../../context/ApplicationContext.tsx";
import { IoHomeOutline, IoBusinessOutline } from "react-icons/io5";
import { AiOutlineTags } from "react-icons/ai";
import { LiaMoneyBillSolid, LiaWalletSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { Button } from "../Button";
import "./index.css";

export const NavBar = () => {
    const { user, setUserAction } = useApplicationContext();
    const router = useHistory();

    return (
        <>
            <div className="container-navbar">
                <div className="container-img">
                    <img src="./image/ignite.png" alt="Logo-Ignite" />
                </div>
                
                <div className="container-menu">
                    <div className="container-buttons-func">
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/")
                            }}
                        >
                            <IoHomeOutline size={18} />
                            <span>Inicio</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/register-entrada-saida")
                            }}
                        >
                            <AiOutlineTags size={18} />
                            <span>Registrar Entrada/Saida</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/")
                            }}
                        >
                            <LiaMoneyBillSolid size={18} />
                            <span>Preço e Horário</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/wallet")
                            }}
                        >
                            <LiaWalletSolid size={18} />
                            <span>Caixa</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/usuarios")
                            }}
                        >
                            <FiUsers size={18} />
                            <span>Usuários</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/company")
                            }}
                        >
                            <IoBusinessOutline size={18} />
                            <span>Empresas</span>
                        </div>
                    </div>

                    <div
                        className="container-button-exit"
                        onClick={() => {
                            setUserAction({ type: "logout" });
                            router.push("/login");
                        }}
                    >
                        <RxExit />
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}