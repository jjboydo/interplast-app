import { Accordion } from "keep-react";
import { RiDeleteBin2Line, RiEdit2Fill } from "react-icons/ri";
import { ModalComp } from "./ModalComp";
import { useState } from "react";
import { ModalDelete } from "./ModalDelete";
export const AccordionProduct = ({ item }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleProductEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleProductDelete = () => {
        setIsDeleting(!isDeleting)
    }

    return (
        <>
            <Accordion>
                <Accordion.Panel className="rounded-sm bg-accent shadow-inner">
                    <Accordion.Container className="rounded-sm">
                        <Accordion.Title className="text-md font-titulo font-bold text-texto flex-1 break-all">{item.name}</Accordion.Title>
                        <RiEdit2Fill size={18} className="mx-3" onClick={handleProductEdit} />
                        <RiDeleteBin2Line size={18} color="red" onClick={handleProductDelete} />
                    </Accordion.Container>
                    <Accordion.Content className="py-3 bg-back">
                        <div className="flex justify-between font-parrafo text-texto">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <p>Precio Unit</p>
                                <p className="font-bold">${item.unitPrice}</p>
                            </div>
                            {item.price50 != 0 && <div className="flex flex-col justify-center items-center gap-2">
                                <p>Precio x50</p>
                                <p className="font-bold">${item.price50}</p>
                            </div>}
                            {item.price100 != 0 && <div className="flex flex-col justify-center items-center gap-2">
                                <p>Precio x100</p>
                                <p className="font-bold">${item.price100}</p>
                            </div>}
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
            {isEditing && <ModalComp isEditing={isEditing} setIsEditing={setIsEditing} item={item} />}
            {isDeleting && <ModalDelete setIsDeleting={setIsDeleting} item={item} />}
        </>
    )
}
