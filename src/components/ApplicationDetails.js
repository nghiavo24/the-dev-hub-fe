import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ApplicationDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const[allApps, setAllApps] = useState();
  const[allNotes, setAllNotes] = useState();

  const getAllApp = () => {
    axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/${id}`)
    .then((res) => {setAllApps(res.data)})
  }

  const getNotes = () => {
    axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/note/${id}`)
    .then((res) => {setAllNotes(res.data)})
  }

  const deleteApp = () =>{
    axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/delete/${id}`)
    .then((res) => { navigate('/myhub')})
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
    axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/note/delete/${noteId}`)
    .then((res) => {window.location.reload()})
  }

return(
  <div>
    <div className='flex flex-row row-span-2'>
      <div className='w-3/4'>
      <p>Job Title: <span>{allApps.title}</span></p>
      <p>Company: <span>{allApps.company}</span></p>
      <p>Date applied: <span>{allApps.applied}</span></p>
      <p>Recruiter/Hiring Manager: <span>{allApps.hiring_manager}</span></p>
      <p>Work Site: <span>{allApps.work_site}</span></p>
      <p>Location: <span>{allApps.location}</span></p>
      <p>Link: <span>{allApps.url}</span></p>
        </div>
      <div className='w-1/4'>
        <h1>Notes</h1>
        <button>Add Note</button>
        <div>{noteData}</div>
      </div>
    </div>

  </div>
)
}

export default ApplicationDetails