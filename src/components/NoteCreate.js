import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const NoteCreate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const[newNote, setNewNote] = useState({
        content:"",
        application: id
    })

    const createNewNote = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`url/note/add/${id}`, newNote)
        } catch (err){
            console.log(err)
        }
    }

    const handleInput = (e) => {
        e.preventDefault()
        const newNoteInput = {...newNote}
        newNoteInput[e.target.name] = e.target.value
        setNewNote(newNoteInput)
    }

  return (
    <div>
        <div>Create a note</div>
        <form onSubmit={createNewNote}>
            <input placeholder='Content' name='content' value={newNote.content} onChange={handleInput} required/>
            <button>Submit</button>
        </form>
    </div>
  )
  }

export default NoteCreate