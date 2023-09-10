// import { useApplicationContext } from "../context/ApplicationContext.tsx";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { allRoutes } from "./routes-array.tsx";

// export function Routes() {
//   const { user } = useApplicationContext();

//   return (
//     <Router>
//       {allRoutes.map(({ path, permission, Children, exact }, index) => {
//         if (!permission(user)) return null;
//         return (
//           <Route key={`route-${index}`} path={path} exact={exact}>
//             <Children />
//           </Route>
//         );
//       })}
//     </Router>
//   );
// }
