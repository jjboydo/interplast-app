import { collection, getDocs, query } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { db } from "../config/firebaseConfig"
import { authContext } from "../context/authContext"
import { AccordionProduct } from "./AccordionProduct"
import { ModalAdd } from "./ModalAdd"

export const ProductList = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isAdding, setIsAdding] = useState(false)
    const { changes, setChanges } = useContext(authContext)
    const [search, setSearch] = useState("")

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

    const results = !search ? products : products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        setIsLoading(true)
        getProducts()
    }, [changes])

    return (
        <>
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
                                                className="bg-back shadow-md border font-titulo border-gray-300 text-texto text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Buscar un producto..."
                                                required
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                    <button onClick={handleAddProduct} type="button" className="flex items-center justify-center text-primario font-titulo font-bold shadow-md bg-texto hover:bg-accent transition-all hover:text-texto focus:ring-4 focus:ring-accent font-medium rounded-lg text-sm px-4 py-2 dark:bg-texto dark:hover:bg-primario focus:outline-none dark:focus:ring-primario">
                                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                        </svg>
                                        <span>Añadir producto</span>
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto px-5 mb-5">
                                <h4 className="mb-3 font-bold font-titulo text-lg">Productos</h4>
                                {results.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 20).map(product => <AccordionProduct key={product.id} item={{ id: product.id, name: product.name, unitPrice: product.unitPrice, price50: product.price50, price100: product.price100, category: product.category }} />)}
                            </div>
                        </div>
                    </div>
                </section>}
            {isAdding && <ModalAdd setIsAdding={setIsAdding} />}
        </>
    )
}
