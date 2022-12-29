import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const NoteCreate = () => {
    const[newNote, setNewNote] = useState({
        content:""
    })



  return (
    <div>
        <div>Create a note</div>
        <form>
            <input placeholder='Content' name='content' value='' onChange='' required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NoteCreate