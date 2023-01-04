import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const NoteCreate = () => {
    const token= sessionStorage.getItem("accessToken"); 
    const { id } = useParams();
    const navigate = useNavigate();
    const[newNote, setNewNote] = useState({
        content:"",
        application: id
    })

    const createNewNote = async (e) => {
        try{
            await axios.post(`http://localhost:8080/api/thedevhub/note/create/${id}`, newNote, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            navigate(`/myhub/application/${id}`)
            window.location.reload()
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
            <button><Link to={`/myhub/application/${id}`}>Back</Link></button>
            <button>Submit</button>
        </form>
    </div>
  )
  }

export default NoteCreate