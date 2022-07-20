import {createContext} from 'react';
import{ noteType} from './../types/noteType.d'


let noteList:noteType[]=[];

const setNotelist:Function=()=> {}


const value={noteList,setNotelist}
const NoteContext=createContext(value);

export default NoteContext;