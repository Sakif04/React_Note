import React, { useContext } from 'react';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {MdOutlineDelete} from 'react-icons/md'
import NoteContext from '../context/NoteContext';


interface noteProp{
    id:number,
    title:string,
    
}

export default function Note({id,title}:noteProp)  {
    const {noteList,setActiveNote,updateNotelist}=useContext(NoteContext);
    const clickHandle=(e:React.MouseEvent)=>{
        e.preventDefault();
        const target=e.target.parentElement as HTMLElement;
        let clickedID=parseInt(target.id);
        setActiveNote(clickedID);
    }

    const deleteNote=(e:React.MouseEvent)=>{
        e.preventDefault();
        let targetId=parseInt(e.currentTarget.id);
        let updatedList=noteList.filter((note)=>note.id!==targetId);
        console.log(updatedList);
        updateNotelist(updatedList);
    }

return (
    <div id={id.toString()} className="note note__modal">
            <button id={id.toString()}  className='btn-del' onClick={deleteNote} >{<MdOutlineDelete id={id.toString()}/>}</button>
            <h1>{title}</h1>
            <button onClick={clickHandle} className="btn_open">Open</button>

    </div>
    
  )
}
