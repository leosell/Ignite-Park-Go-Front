import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Login } from "./pages/login";
import { Inicio } from "./pages/inicio";
import { Usuario } from "./pages/usuario";
import { Company } from "./pages/company";
import { Wallet } from "./pages/wallet";
import { PrecoEHorario } from "./pages/preco-e-horario";
import { RegistrarEntradaSaida } from "./pages/registrar-entrada-saida";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Inicio }  path="/inicio" />
           <Route component = { Usuario }  path="/usuarios" />
           <Route component = { Company }  path="/company" />
           <Route component = { Wallet }  path="/wallet" />
           <Route component = { PrecoEHorario }  path="/preco-horario" />
           <Route component = { RegistrarEntradaSaida }  path="/registrar-entrada-saida" />
       </BrowserRouter>
   )
}

export default Routes;