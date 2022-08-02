import {createContext} from 'react';
import{ noteType} from './../types/noteType.d'


let noteList:noteType[]=[];

const setNotelist:Function=()=> {}
let activeNote:null|number=null;

const setActiveNote=()=>{};
const updateNotelist=()=>{};

const value={noteList,setNotelist,activeNote,setActiveNote,updateNotelist}
const NoteContext=createContext(value);

export default NoteContext;