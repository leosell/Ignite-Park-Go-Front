import { useHistory } from "react-router-dom";
import { useApplicationContext } from "../../context/ApplicationContext.tsx";
import { NavBar } from "../../components/NavBar/index.jsx";
import { MenuSuperior } from "../../components/MenuSuperior/index.jsx";
import "./index.css";

export const Inicio = () => {
    const { user, setUserAction } = useApplicationContext();
    const router = useHistory();

    return (
        <div className="container-home">
            <NavBar />
            <MenuSuperior />
        </div>
    )
}