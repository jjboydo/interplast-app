
"use client";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Modal, Button } from "keep-react";
import { useContext, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { db } from "../config/firebaseConfig";
import { authContext } from "../context/authContext";

export const ModalAdd = ({ setIsAdding }) => {

    const {changes, setChanges} = useContext(authContext)

    const onClick = () => {
        setIsAdding(false)
    }

    const [formData, setFormData] = useState({
        name: '',
        unitPrice: '',
        price50: '',
        price100: '',
        category: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "products"), formData)
        setIsAdding(false)
        setChanges(!changes)
        alert("Producto agregado correctamente")
    }

    return (
        <>
            <Modal
                size="md"
                show={true}
                onClose={onClick}
                icon={<RiAddBoxFill size={30} />}
            >
                <Modal.Header className="bg-primario p-4"></Modal.Header>
                <Modal.Body className="bg-primario p-4 text-texto font-titulo font-bold">
                    <div className="space-y-6">
                        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nombre de Producto
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="number"
                                    name="unitPrice"
                                    id="unitPrice"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.unitPrice}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    htmlFor="unitPrice"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Precio Unitario
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="number"
                                    name="price50"
                                    id="price50"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.price50}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    htmlFor="price50"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Precio por 50
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="number"
                                    name="price100"
                                    id="price100"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[transparent] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.price100}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    htmlFor="price100"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Precio por 100
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Seleccionar categoría
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                >
                                    <option value="">...</option>
                                    <option value="Film">Film</option>
                                    <option value="Bandejas Plasticas">Bandejas Plasticas</option>
                                    <option value="Bandejas Carton">Bandejas Carton</option>
                                    <option value="Bandejas Aluminio">Bandejas Aluminio</option>
                                    <option value="Bandejas Expandido">Bandejas Expandido</option>
                                    <option value="Cajas Lomo/Pizza">Cajas Lomo/Pizza</option>
                                    <option value="Potes con Tapa">Potes con Tapa</option>
                                    <option value="Potes Bisagra">Potes Bisagra</option>
                                    <option value="Bolsas Consorcio">Bolsas Consorcio</option>
                                    <option value="Camisetas">Camisetas</option>
                                    <option value="Troquelados">Troquelados</option>
                                    <option value="Vasos termicos">Vasos térmicos</option>
                                    <option value="Vasos plasticos">Vasos plásticos</option>
                                </select>
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
