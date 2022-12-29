import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplicationDetails = () => {
  const { id } = useParams();
  const[allApps, setAllApps] = useState();
  const[allNotes, setAllNotes] = useState();

  const getAllApp = () => {
    axios.get(`url/application/${id}`)
    .then((res) => { setAllApps(res.data)})
  }

  const getNotes = () => {
    axios.get(`url/notes/${id}`)
    .then((res) => {setAllNotes(res.data)})
  }

  
useEffect(() =>{
  getAllApp();
  getNotes();
}, [])

if (allApps === undefined) return;
if (allNotes === undefined) return;

  const noteData = allNotes.map((note, index) => {
    return(
      <div key ={index}>
        <p>{note.date}</p>
        <p>{note.content}</p>
        <button onClick={() => deleteNote(note._id)}>Delete a note</button>
      </div>
    )
  })

  const deleteNote = (noteId) => {
    axios.delete(`url/notes/delete/${noteId}`)
    .then((res) => {window.location.reload()})
  }
return(
  <div>
    <div>
      <div>
        <button>Update Application</button>
        <button>Delete Application</button>
      </div>
      {allApps.title}
    </div>
    <div>{noteData}
    <button>Add a note</button>
    </div>
  </div>
)
}

export default ApplicationDetails