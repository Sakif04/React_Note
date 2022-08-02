import React from 'react';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';


type modalProp={
    title:string,
    description:string
}
export default function Note({title,description}:modalProp)  {

    const [modalState,SetModal]=useState(false);
    const clickHandle=()=>SetModal((state)=>!state);


return (<>
    <div className="note note__modal">
            <h1>{title}</h1>
            <button onClick={clickHandle} className="btn_open">Open</button>
    </div>
    </>
  )
}
