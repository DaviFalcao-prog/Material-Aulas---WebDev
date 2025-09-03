import{createBrowserRouter} from "react-router-dom"
import AdminLayout from "../pages/AdminLayout"
import Relatorios from "../pages/Relatorios"
import Dashboard from "../pages/Dashboard"
import Usuarios from "../pages/Usuarios"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <AdminLayout/>,
        children: [
            {
                path:"/relatorios",
                element:<Relatorios />
            },
            {
                index: true,
                element:<Dashboard />
            },
            {
                path:"/usuarios",
                element:<Usuarios />
            }
        ]
    },

])