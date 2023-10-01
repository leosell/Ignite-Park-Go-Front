import { NavBar } from "../../components/NavBar/index.jsx";
import { MenuSuperior } from "../../components/MenuSuperior/index.jsx";
import { useEffect, useState } from "react";
import { AiOutlineForm, AiOutlineDelete } from "react-icons/ai";
import { Button } from "../../components/Button/index.jsx";
import "./Usuario.css";
import { api } from "../../api/index.js";
import { getToken } from "../../Session.js";
import { Box, Modal } from "@mui/material";
import { Input } from "../../components/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

export const Usuario = () => {
    const [ users, setUsers ] = useState([]);
    const [ company, setCompany ] = useState([]);
    const [ enabled, setEnabled ] = useState(true);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [type, setType] = useState("");
    const [ companySelect, setCompanySelect ] = useState({});
    const [ visible, setVisible ] = useState(false);

    console.log(companySelect);

    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);

    const typeUser = [
        {name: "Super", value: "SUPER"},
        {name: "Proprietario", value: "PROPRIETARIO"},
        {name: "Usuario", value: "USUARIO"},
    ]

    const developer = () => {
        alert("Serviço em desenvolvimento");
    }

    const get = async () => {
        try {
            const user = await api.get("/", { headers: { "Authorization": `Bearer ${getToken()}` } });
            const company = await api.get("/company", { headers: { "Authorization": `Bearer ${getToken()}` } });
            setUsers(user.data);
            setCompany(company.data);
        } catch (e) {
            console.log(e);
            alert(e);
        }
    }

    const saveUser = async () => {

        const body = {
            name: name,
            email: email,
            password: password,
            type: type,
            company: company[companySelect]
        }

        try {
            const data = await api.post("/", body, { headers: { "Authorization": `Bearer ${getToken()}` } })
            console.log(data.data);
        } catch (e) {
            console.log(e);
        }
    }

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
                        onClick={handleOpen}
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
                                <td className="table-users">{item.enabled === true ? "Sim" : "Não"}</td>
                                <td className="table-users">{item.name}</td>
                                <td className="table-users">{item.email}</td>
                                <td className="table-users">{item.type}</td>
                                <td className="table-users">{item.company.nomeFantasia}</td>
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

            <Modal
                open={visible}
                onClose={handleClose}
            >
                <Box className="modal-container">
                    <Box className="form-control">
                        <Box className="form-control-div">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={enabled}
                                        onChange={(e) => setEnabled(e.target.enabled)}
                                    />
                                }
                                label="Ativo"
                                labelPlacement="end"
                            />

                            <Autocomplete
                                disablePortal
                                options={company.map(e => e.nomeFantasia)}
                                onChange={e => setCompanySelect(e.target.value)}
                                renderInput={(params) => <TextField { ...params } label="Selecione" />}
                                className="dropdown-company"
                            />

                            <label>Nome</label>
                            <Input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <label>E-mail</label>
                            <Input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <label>Password</label>
                            <Input
                                type="text"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Autocomplete
                                disablePortal
                                options={typeUser.map(e => e.value)}
                                value={type}
                                onChange={(event, newValue) => {
                                    setType(newValue);
                                }}
                                renderInput={(params) => <TextField { ...params } label="Selecione" />}
                                className="dropdown-type-user"
                            />
                        </Box>
                        <Box className="form-button">
                            <Box className="button-saved">
                                <Button
                                    className="saved-button"
                                    onClick={saveUser}
                                >
                                    <AiOutlineCheck />
                                    Salvar
                                </Button>
                            </Box>

                            <Box className="button-cancell">
                                <Button 
                                    className="saved-button"
                                    onClick={handleClose}
                                >
                                    <AiOutlineClose />
                                    Cancelar
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}