import {createContext} from 'react';
import{ noteType} from './../types/noteType.d'


let noteList:noteType[]=[];


let activeNote:null|number=null;

const setActiveNote=(args:any)=>{};
const updateNotelist=(args:any)=>{};

const value={noteList,activeNote,setActiveNote,updateNotelist}
const NoteContext=createContext(value);

export default NoteContext;