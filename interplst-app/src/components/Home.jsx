import { AccordionProduct } from "./AccordionProduct"
import { db } from "../config/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { ModalAdd } from "./ModalAdd"
import { authContext } from "../context/authContext"
import { Header } from "./Header"

export const Home = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isAdding, setIsAdding] = useState(false)
    const { changes, setChanges } = useContext(authContext)

    const getProducts = () => {
        const myProducts = query(collection(db, "products"))
        getDocs(myProducts)
            .then((resp) => {
                const productList = resp.docs.map((doc) => {
                    const product = {
                        id: doc.id,
                        ...doc.data(),
                    };

                    return product;
                })
                setProducts(productList)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    }

    const handleAddProduct = () => {
        setIsAdding(!isAdding)
    }

    useEffect(() => {
        setIsLoading(true)
        getProducts()
    }, [changes])

    return (
        <>
            <Header/>
            {isLoading ?
                <div className="mx-auto flex flex-col justify-center items-center py-[20vh] shadow-2xl">
                    <h2 className="text-texto text-[30px] font-titulo font-bold animate-bounce" > INTERPLAST </h2>
                    <h2 className="text-texto text-[20px] font-titulo animate-pulse" > Cargando productos... </h2>
                </div>
                :
                <section className="dark:bg-gray-900 p-3 sm:p-5">
                    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                        <div className="bg-back rounded-lg dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                <div className="w-full md:w-1/2">
                                    <form className="flex items-center">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-back border border-gray-300 text-texto text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Search"
                                                required
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                    <button onClick={handleAddProduct} type="button" className="flex items-center justify-center text-primario shadow-md bg-texto hover:bg-accent hover:text-texto focus:ring-4 focus:ring-accent font-medium rounded-lg text-sm px-4 py-2 dark:bg-texto dark:hover:bg-primario focus:outline-none dark:focus:ring-primario">
                                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                        </svg>
                                        Añadir producto
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto px-5 mb-5">
                                <h4 className="mb-3 font-bold font-titulo text-lg">Productos</h4>
                                {products.map(product => <AccordionProduct key={product.id} item={{ id: product.id, name: product.name, unitPrice: product.unitPrice, price50: product.price50, price100: product.price100, category: product.category }} />)}
                            </div>
                            {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                        </div>
                    </div>
                </section>}
            {isAdding && <ModalAdd setIsAdding={setIsAdding} />}
        </>
    )
}
