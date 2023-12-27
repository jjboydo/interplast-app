
"use client";
import { doc, setDoc } from "firebase/firestore";
import { Modal, Button } from "keep-react";
import { useContext, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { db } from "../config/firebaseConfig";
import { authContext } from "../context/authContext";

export const ModalComp = ({ isEditing, setIsEditing, item }) => {

    const [unitPrice, setUnitPrice] = useState(item.unitPrice)
    const [price50, setPrice50] = useState(item.price50)
    const [price100, setPrice100] = useState(item.price100)

    const {changes, setChanges} = useContext(authContext)

    const onClick = () => {
        setIsEditing(false)
    };

    const handleEditUnitPrice = (e) => {
        setUnitPrice(e.target.value)
    }

    const handleEditPrice50 = (e) => {
        setPrice50(e.target.value)
    }

    const handleEditPrice100 = (e) => {
        setPrice100(e.target.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await setDoc(doc(db, "products", item.id), {
            id: item.id,
            name: item.name,
            unitPrice,
            price50,
            price100,
            category: item.category
        })
        setIsEditing(false)
        setChanges(!changes)
        alert("Producto modificado correctamente")
    }

    return (
        <>
            <Modal
                size="md"
                show={true}
                onClose={onClick}
                icon={<RiEditBoxFill size={30} />}
            >
                <Modal.Header className="bg-primario p-4"></Modal.Header>
                <Modal.Body className="bg-primario p-4 text-texto font-titulo font-bold">
                    <div className="space-y-6">
                        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    value={item.name}
                                    name="name"
                                    id="name"
                                    readOnly
                                    className="block py-2.5 px-0 w-full text-md text-[gray] bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    disabled
                                />
                                <label
                                    htmlFor="name"
                                    className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nombre de Producto
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="number"
                                    name="unit-price"
                                    id="unit-price"
                                    value={unitPrice}
                                    onChange={handleEditUnitPrice}
                                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                />
                                <label
                                    htmlFor="unit-price"
                                    className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Precio Unitario
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="number"
                                    name="price-50"
                                    id="price-50"
                                    value={price50}
                                    onChange={handleEditPrice50}
                                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                />
                                <label
                                    htmlFor="price-50"
                                    className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Precio por 50
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="number"
                                    name="price-100"
                                    id="price-100"
                                    value={price100}
                                    onChange={handleEditPrice100}
                                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="price-100"
                                    className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Precio por 100
                                </label>
                            </div>
                            <div className="flex justify-evenly">
                                <Button type="outlineGray" className="bg-secondary" onClick={onClick}>
                                    Cancelar
                                </Button>
                                <button type="submit" className="bg-texto text-accent rounded-lg px-5 hover:bg-back transition-all ease-linear">Confirmar</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
