import {createContext} from 'react';
import{ noteType} from './../types/noteType.d'


let noteList:noteType[]=[];
const value={noteList}
const NoteContext=createContext({noteList});

export default NoteContext;