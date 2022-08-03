import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import NoteContext from '../context/NoteContext';
import { noteType } from '../types/noteType.d';
import Modal from './Modal';
import Note from './Note';



function NoteList() {
  const {noteList,activeNote,setActiveNote}=useContext(NoteContext);
  const noteModal=activeNote&& noteList.filter((note)=>note.id===activeNote)[0];
    
  useEffect(()=>{},[noteList]);
  

  
  const clickHandle=(e:React.MouseEvent)=>{
    e.preventDefault();
    setActiveNote(null);
  }

 
  const data=noteList.map(note=><Note title={note.title} id={note.id} key={note.id} setActiveNote={setActiveNote} description={note.description} />);
  return (
  <div className="note-list">
    {data}
    { noteModal && <Modal title={noteModal?.title} description={noteModal?.description}/>}
  </div>)
}

export default NoteList