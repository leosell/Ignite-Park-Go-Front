// import { User } from "../context/types/application-context-types";
// import { Inicio } from "../pages/inicio";
// import { Login } from "../pages/login";
// import { Usuario } from "../pages/usuario";
// import { Wallet } from "../pages/wallet";
// import { Company } from "../pages/company";

// interface RouterType {
//     path: string;
//     exact?: boolean;
//     Children: (props: any) => JSX.Element;
//     permission: (a: User) => boolean;
// }

// export const allRoutes: RouterType[] = [
//     {
//         path: "/login",
//         Children: Login,
//         permission: () => true
//     },
//     {
//         path: "/",
//         exact: true,
//         Children: Inicio,
//         permission: (user) => user.isLogged
//     },
//     {
//         path: "/usuarios",
//         Children: Usuario,
//         permission: (user) => [ "SUPER" ].includes(user.userData.type!)
//     },
//     {
//         path: "/wallet",
//         Children: Wallet,
//         permission: (user) => ["SUPER", "PROPRIETARIO"].includes(user.userData.type!)
//     },
//     {
//         path: "/company",
//         Children: Company,
//         permission: (user) => ["SUPER", "PROPRIETARIO"].includes(user.userData.type!)
//     },
// ]