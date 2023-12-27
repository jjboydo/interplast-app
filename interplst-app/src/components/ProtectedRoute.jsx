import { useContext } from "react"
import { authContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)

    if (loading) return <h1>Cargando</h1>

    if (!user) return <Navigate to="/login" />

    return <>{children}</>
}
