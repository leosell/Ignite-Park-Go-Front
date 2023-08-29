import { ApplicationContextProvider } from "./context/ApplicationContext.tsx";
import { Routes } from "./routes/routes.jsx";

const App = () => {
    return (
        <ApplicationContextProvider>
            <Routes />
        </ApplicationContextProvider>
    )
}

export default App;