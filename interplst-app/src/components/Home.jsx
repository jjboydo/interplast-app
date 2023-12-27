import { useContext } from "react";
import { authContext } from "../context/authContext"


export const Home = () => {
    const { user } = useContext(authContext);
    return (
        <h1 className="text-texto">Home</h1>
    )
}
