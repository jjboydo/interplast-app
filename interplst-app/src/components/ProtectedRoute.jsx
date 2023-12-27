import { useContext } from "react"
import { authContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)

    if (loading) return <div className="mx-auto flex flex-col justify-center items-center py-[20vh] shadow-2xl">
        <h2 className="text-texto text-[30px] font-titulo font-bold animate-bounce" > INTERPLAST </h2>
        <h2 className="text-texto text-[20px] font-titulo animate-pulse" > Cargando productos... </h2>
    </div>

    if (!user) return <Navigate to="/login" />

    return <>{children}</>
}
