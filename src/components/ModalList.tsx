import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/NoteContext';
import { noteType } from '../types/noteType.d';
import Modal from './Modal';


function ModalList() {
  const {noteList}=useContext(NoteContext);
  useEffect(()=>{},[noteList]);
  
  const data=noteList.map(note=><Modal title={note.title} key={note.id} description={note.description} />);
  return (
  <>
    {data}
  </>
  )
}

export default ModalList