import { deleteDoc, doc } from "firebase/firestore";
import { Modal, Button } from "keep-react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { db } from "../config/firebaseConfig";
import { useContext } from "react";
import { authContext } from "../context/authContext";
export const ModalDelete = ({ setIsDeleting, item }) => {

    const {changes, setChanges} = useContext(authContext)

    const onClick = () => {
        setIsDeleting(false)
    }

    const deleteProduct = async () => {
        await deleteDoc(doc(db, "products", item.id))
        setIsDeleting(false)
        setChanges(!changes)
        alert("Producto eliminado correctamente")
    }

    return (
        <Modal
            size="md"
            show={true}
            onClose={onClick}
            icon={<RiDeleteBin2Line color="red" size={30} />}
        >
            <Modal.Header className="bg-[lightcoral] p-4"></Modal.Header>
            <Modal.Body className="bg-[lightcoral] px-4 text-texto font-titulo font-bold">
                <div className="space-y-6">
                    <p className="text-xl text-center break-all">Desea borrar "{item.name}"?</p>
                    <div className="flex justify-evenly">
                        <Button type="outlineGray" className="bg-secondary" onClick={onClick}>
                            Cancelar
                        </Button>
                        <button onClick={deleteProduct} className="bg-texto text-accent rounded-lg px-5 hover:bg-[red] hover:text-texto hover:shadow-2xl transition-all ease-linear">Confirmar</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
