import React, { useContext } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import NoteContext from "../context/NoteContext";



function Modal(props:any){
    
    const {setActiveNote}=useContext(NoteContext);

    function clickHandle(e:React.MouseEvent){
        e.preventDefault();
        setActiveNote(null);
    }
    return(
    <>
        <div className="modal" >
            <h1 className="text-3xl">
                {props.title}
            </h1>
            {props.description}
            <button className="btn_delete" onClick={clickHandle}><AiOutlineClose className='delete_icon'/></button>
        </div>
    </>)
    }

    export default Modal;