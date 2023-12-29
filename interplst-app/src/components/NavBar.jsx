import React from 'react'
import { RiFileUserFill, RiStore3Fill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="fixed z-50 w-full h-14 max-w-lg -translate-x-1/2 bg-texto border border-texto shadow-2xl shadow-texto rounded-t-xl bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-2 mx-auto">
                <NavLink to={"/"} className="inline-flex flex-col items-center justify-center" >
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:scale-110 active:scale-110 transition-all group" >
                        <RiStore3Fill size={25} color='rgb(201, 173, 139)' />
                        <span className="text-xs text-accent font-titulo">Productos</span>
                    </button>
                </NavLink>
                <NavLink to={"/proveedores"} className="inline-flex flex-col items-center justify-center">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:scale-110 active:scale-110 transition-all group">
                        <RiFileUserFill size={25} color='rgb(201, 173, 139)' />
                        <span className="text-xs text-accent font-titulo">Proveedores</span>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
