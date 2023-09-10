import { useEffect, useState } from "react";
import { AiOutlineForm, AiOutlineDelete } from "react-icons/ai";
import { NavBar } from "../../components/NavBar"
import { MenuSuperior } from "../../components/MenuSuperior"
import { Button } from "../../components/Button";
import "./Company.css";

export const Company = () => {
    const [ company, setCompany ] = useState([]);

    const dados = [
        {
            id: 1,
            enabled: "Sim",
            nomeFantasia: "Ignite Park&Go",
            diaFuncionamento: "Seg. à Sex.",
            horarioFuncionamento: "7:30 às 20:30",
            telefone: "(48) 9 9138-1253"
        },
        {
            id: 2,
            enabled: "Sim",
            nomeFantasia: "Ignite Park&Go",
            diaFuncionamento: "Seg. à Sex.",
            horarioFuncionamento: "7:30 às 20:30",
            telefone: "(48) 9 9138-1253"
        },
        {
            id: 3,
            enabled: "Sim",
            nomeFantasia: "Ignite Park&Go",
            diaFuncionamento: "Seg. à Sex.",
            horarioFuncionamento: "7:30 às 20:30",
            telefone: "(48) 9 9138-1253"
        },
        {
            id: 4,
            enabled: "Sim",
            nomeFantasia: "Ignite Park&Go",
            diaFuncionamento: "Seg. à Sex.",
            horarioFuncionamento: "7:30 às 20:30",
            telefone: "(48) 9 9138-1253"
        },
    ]

    useEffect(() => {
        setCompany(dados);
    }, [])

    return (
        <>
            <NavBar />
            <MenuSuperior />
            <div className="container-company">
                <div className="container-company-topo">
                    <span>Empresas</span>
                    <Button
                        onClick={() => {
                            alert("Serviço em desenvolvimento...")
                        }}
                    >
                        Adicionar Empresa
                    </Button>
                </div>
                <table className="table-company">
                    <thead>
                        <tr>
                            <th className="table-company-header">Ativo</th>
                            <th className="table-company-header">Nome Fantasia</th>
                            <th className="table-company-header">Dia Funcionamento</th>
                            <th className="table-company-header">Horário Funcionamento</th>
                            <th className="table-company-header">Telefone</th>
                            <th className="table-company-header">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {company.map((item) => (
                            <tr key={item.id}>
                                <td className="table-company">{item.enabled}</td>
                                <td className="table-company">{item.nomeFantasia}</td>
                                <td className="table-company">{item.diaFuncionamento}</td>
                                <td className="table-company">{item.horarioFuncionamento}</td>
                                <td className="table-company">{item.telefone}</td>
                                <td className="table-company">
                                    <AiOutlineForm size={20} />
                                    <AiOutlineDelete size={20} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}