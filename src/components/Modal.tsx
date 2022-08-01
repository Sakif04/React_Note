import React from 'react';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';


type modalProp={
    title:string,
    description:string
}
export default function Modal({title,description}:modalProp)  {

    const [modalState,SetModal]=useState(false);
    const clickHandle=()=>SetModal((state)=>!state);
    const modal=(
    <React.Fragment>
        <div className="modal" >
            <h1 className="text-3xl">
                {title}
            </h1>
            {description}
            <button className="btn_delete" onClick={clickHandle}><AiOutlineClose className='delete_icon'/></button>
        </div>
    </React.Fragment>
    )


return (<>
    <div className="note note__modal">
            <h1>{title}</h1>
            <button onClick={clickHandle} className="btn_open">Open</button>
    </div>
    {modalState?modal:null}
    </>
  )
}
