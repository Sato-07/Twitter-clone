import { useEffect, useState } from 'react';
import {create } from 'zustand';

interface LoginModalStore{
    isOpen: boolean;
    onOpen:() => void;
    onClose:() => void;
};


const UseLoginModal = ():LoginModalStore =>{
    const[isOpen, setIsOpen] = useState(false);

    const handleOpen = () =>{
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect( () =>{

    },[isOpen] );

    return{
        isOpen,
        onOpen:handleOpen,
        onClose:handleClose,

    }


}


export default UseLoginModal


