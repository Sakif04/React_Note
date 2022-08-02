import React from "react";

function Modal({title:any,description:string}){
    
    return(
    <>
        <div className="modal" >
            <h1 className="text-3xl">
                {title}
            </h1>
            {description}
            <button className="btn_delete" onClick={clickHandle}><AiOutlineClose className='delete_icon'/></button>
        </div>
    </>)
    }

    export default Modal;