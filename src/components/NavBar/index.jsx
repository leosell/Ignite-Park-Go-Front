import { useHistory } from "react-router-dom";
import { IoHomeOutline, IoBusinessOutline } from "react-icons/io5";
import { AiOutlineTags } from "react-icons/ai";
import { LiaMoneyBillSolid, LiaWalletSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { removeToken } from "../../Session";
import "./index.css";

export const NavBar = () => {
    const router = useHistory();

    const saida = () => {
        removeToken();
        router.push("/");
    }

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
                                router.push("/inicio")
                            }}
                        >
                            <IoHomeOutline size={18} />
                            <span>Inicio</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/registrar-entrada-saida")
                            }}
                        >
                            <AiOutlineTags size={18} />
                            <span>Registrar Entrada/Saida</span>
                        </div>
                        <div
                            className="buttons-from-icons"
                            onClick={() => {
                                router.push("/preco-horario")
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
                        onClick={() => saida()}
                    >
                        <RxExit />
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}