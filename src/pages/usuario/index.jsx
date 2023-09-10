import { NavBar } from "../../components/NavBar/index.jsx";
import { MenuSuperior } from "../../components/MenuSuperior/index.jsx";
import { useEffect, useState } from "react";
import { AiOutlineForm, AiOutlineDelete } from "react-icons/ai";
import { Button } from "../../components/Button/index.jsx";
import "./Usuario.css";
import { api } from "../../api/index.js";
import { getToken } from "../../Session.js";

export const Usuario = () => {
    const [ users, setUsers ] = useState([]);

    const developer = () => {
        alert("Serviço em desenvolvimento");
    }

    const get = async () => {
        try {
            const user = await api.get("/", { headers: { "Authorization": `Bearer ${getToken()}` } });;
            setUsers(user.data);
        } catch (e) {
            console.log(e);
            alert(e);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dados = [
        {
            id: 1,
            enabled: "Sim",
            nome: "Leonardo Sell",
            email: "leo@gmail.com",
            tipo: "SUPER",
            empresa: "Sell Technology"
        },
        {
            id: 2,
            enabled: "Sim",
            nome: "Julia Miranda",
            email: "julia@gmail.com",
            tipo: "PROPRIETARIO",
            empresa: "Julinha Gamer"
        },
        {
            id: 3,
            enabled: "Sim",
            nome: "Osvaldo Sell",
            email: "osvaldo@gmail.com",
            tipo: "USUARIO",
            empresa: "Usuários"
        },
        // {
        //     id: 4,
        //     enabled: "Sim",
        //     nomeFantasia: "Ignite Park&Go",
        //     diaFuncionamento: "Seg. à Sex.",
        //     horarioFuncionamento: "7:30 às 20:30",
        //     telefone: "(48) 9 9138-1253"
        // },
    ]

    useEffect( () => {
        get();
    },[])

    return (
        <>
            <NavBar />
            <MenuSuperior />
            <div className="container-users">
                <div className="container-users-topo">
                    <span>Usuários</span>
                    <Button
                        onClick={developer}
                    >
                        Adicionar Usuário
                    </Button>
                </div>
                <table className="table-company">
                    <thead>
                        <tr>
                            <th className="table-users-header">Ativo</th>
                            <th className="table-users-header">Nome</th>
                            <th className="table-users-header">Email</th>
                            <th className="table-users-header">Tipo</th>
                            <th className="table-users-header">Empresa</th>
                            <th className="table-users-header">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item => (
                            <tr key={item.id}>
                                <td className="table-users">{item.enabled == true ? "Sim" : "Não"}</td>
                                <td className="table-users">{item.name}</td>
                                <td className="table-users">{item.email}</td>
                                <td className="table-users">{item.type}</td>
                                <td className="table-users">{item.companyId}</td>
                                <td className="table-users">
                                    <AiOutlineForm
                                        size={20}
                                        className="icon-edit"
                                        onClick={developer}
                                    />
                                    <AiOutlineDelete
                                        size={20}
                                        className="icon-delete"
                                        onClick={developer}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}