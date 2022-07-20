import React from 'react';
import { createContext } from 'react';
import {noteType} from "./../types/noteType.d"
import NoteContext from './NoteContext';


type NoteProps={
  children:JSX.Element
}


export default function NoteProvider( {children}:NoteProps){
  let noteList :noteType[]=[
    {
      id:1,
      title:"eat Sleep Repeat",
      description:"Burp during eating & Dream during sleep"
    }
  ];
  const value={noteList}

  return(
    <NoteContext.Provider value={value} >
      {children}
    </NoteContext.Provider>  
  )
} 


