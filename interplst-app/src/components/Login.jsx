import { useContext, useState } from "react";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { login } = useContext(authContext)
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

        
    return (
        <section className="bg-[rgb(213,179,98)] bg-gradient-to-tl from-primary via-secondary to-accent ">
            {error && <Alert message={error} />}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <img className="w-40 my-6" src="/img/interplast-high-resolution-logo-black-transparent.png" alt="logo" />

                <div className="w-full bg-texto rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold font-titulo leading-tight tracking-tight text-back md:text-2xl dark:text-white">
                            Ingresar a INTERPLAST
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-back dark:text-white font-titulo">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    className="bg-back border border-accent text-texto font-parrafo sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="ejemplo@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-back dark:text-white font-titulo">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••••••••••"
                                    onChange={handleChange}
                                    className="bg-back border border-accent text-texto font-parrafo sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-texto bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
    {/* <div className="w-full max-w-xs m-auto">
            {error && <Alert message={error} />}

            <form
                onSubmit={handleSubmit}
                className="bg-back shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-texto text-sm font-bold mb-2 font-titulo"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-texto leading-tight focus:outline-none focus:shadow-outline font-parrafo"
                        placeholder="youremail@company.tld"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-texto text-sm font-bold mb-2 font-titulo"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-texto leading-tight focus:outline-none focus:shadow-outline font-parrafo"
                        placeholder="*************"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-primary hover:bg-blue-700 text-texto font-titulo font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>

        </div> */}
}
