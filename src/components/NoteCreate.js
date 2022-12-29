import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const NoteCreate = () => {
    const[newNote, setNewNote] = useState({
        content:""
    })

    const handleInput = (e) => {
        e.preventDefault()
        const newNoteInput = {...newNote}
        newNoteInput[e.target.name] = e.target.value
        setNewNote(newNoteInput)
    }


  return (
    <div>
        <div>Create a note</div>
        <form>
            <input placeholder='Content' name='content' value={newNote.content} onChange={handleInput} required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NoteCreate