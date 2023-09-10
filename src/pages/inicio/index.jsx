import { NavBar } from "../../components/NavBar/index.jsx";
import { MenuSuperior } from "../../components/MenuSuperior/index.jsx";
import "./index.css";
import { getToken } from "../../Session.js";
import { useHistory } from "react-router-dom";

export const Inicio = (props) => {
    console.log(props);
    const token = getToken();
    const router = useHistory();
    return (
        <div className="container-home">
            {
                token == null ? (
                    router.push("/login")
                ) : (
                    <>
                        <NavBar />
                        <MenuSuperior />
                    </>
                )
            }
        </div>
    )
}