import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import NoteContext from '../context/NoteContext';
import { noteType } from '../types/noteType.d';
import Modal from './Modal';



function ModalList() {
  const {noteList,activeNote,setActiveNote}=useContext(NoteContext);
  
  useEffect(()=>{},[noteList]);
  const title="Hello";
  const description="Hello brother";


  const clickHandle=(e:React.MouseEvent)=>{
    e.preventDefault();
    setActiveNote(null);

  }

  
  const modal=()=>(
    <React.Fragment>
        <div className="modal" >
            <h1 className="text-3xl">
                {title}
            </h1>
            <p className="text-3xl text-slate-400">
                {description}
            </p>
            <button className="btn_delete" onClick={clickHandle}><AiOutlineClose className='delete_icon'/></button>
        </div>
    </React.Fragment>
    )
  
  const data=noteList.map(note=><Modal title={note.title} key={note.id} description={note.description} />);
  return (
  <>
    {data}
    {activeNote&&modal}
  </>
  )
}

export default ModalList