import { stringify } from 'querystring';
import React, { ChangeEvent, useContext } from 'react'
import { useState } from 'react';
import NoteContext from '../context/NoteContext';
import {GoDiffAdded} from 'react-icons/go';
import { noteType } from '../types/noteType.d';



function AddNote() {
    const initialState={
        title:'',
        description:''
    }

    const [note, setNote] = useState(initialState);
    
    // get list from the context
    const {noteList,updateNotelist}=useContext(NoteContext);


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
        const newNote:noteType={...note,id:noteList.length+1};
        noteList===[] && noteList.push(newNote)
        let newNotelist=[...noteList,newNote];
        updateNotelist(newNotelist);
        localStorage.setItem("notes",JSON.stringify(newNotelist));
        setNote(initialState)
        console.log(noteList);
    }

  return (
    <form className='note-add-form' onSubmit={handleSubmit}>
        <div className="inputs">
            <div className="title">
                <input type="text" name="title" value={note.title}  className='block peer input input-title' placeholder=' ' onChange={handleForm}/>
                <label htmlFor="title" className='label label-title'> Note Title</label>
            </div>

            <div className="description">
                <textarea  name="description" className='block peer input input-desc' value={note.description} placeholder=' ' onChange={handleForm}></textarea>
                <label htmlFor="description" className='label label-desc'> Note Description</label>
            </div>
        </div>
        <button type='submit' className='btn-add'><GoDiffAdded /></button>
    </form>
  )
}


export default AddNote