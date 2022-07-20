import React, { useState } from 'react';
import { createContext } from 'react';
import {noteType} from "./../types/noteType.d"
import NoteContext from './NoteContext';


type NoteProps={
  children:JSX.Element
}


export default function NoteProvider( {children}:NoteProps){
  
  let notes=[{id:0,title:'Dream Big',descripion:"koto je shopno"}];
  
  const [noteList,setNotelist]=useState([]);

  function updateNotelist(newNotelist:noteType[]){
    setNotelist(newNotelist);
    localStorage.setItem('notes',JSON.stringify(newNotelist));
  }

  const value={noteList,updateNotelist}

  return(
    <NoteContext.Provider value={value} >
      {children}
    </NoteContext.Provider>  
  )
} 


