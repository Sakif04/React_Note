import { stringify } from 'querystring';
import React, { useContext } from 'react'
import { useState } from 'react';
import NoteContext from '../context/NoteContext';
import {GoDiffAdded} from 'react-icons/go';
import { noteType } from '../types/noteType.d';



function AddNote() {
    const [note, setNote] = useState({
        title:'',
        description:''
    });
    
    // get list from the context
    const {noteList}=useContext(NoteContext);


    const handleForm=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const target= e.target as HTMLInputElement;
        setNote((noteData)=>({...noteData,
            [target.name]:target.value
        } ))
    }
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(note.title==="" || note.description==="") return;
        const newNote={...note,id:noteList.length+1}
        noteList.push(newNote);
        console.log(noteList);
    }

  return (
    <form className='note-add-form' onSubmit={handleSubmit}>
        <div className="inputs">
            <div className="title">
                <input type="text" name="title" value={note.title}  className='peer input input-title' placeholder=' ' onChange={handleForm}/>
                <label htmlFor="title" className='label label-title'> Note Title</label>
            </div>
            <div className="description">
                
                <textarea  name="description" className='peer input input-desc' value={note.description} placeholder=' '  onChange={handleForm}></textarea>
                <label htmlFor="description" className='label label-desc'> Note Description</label>
            </div>
        </div>
        <button type='submit' className='btn-add'><GoDiffAdded /></button>
    </form>
  )
}


export default AddNote