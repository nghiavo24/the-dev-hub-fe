import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link} from 'react-router-dom';

const ApplicationDetails = () => {
  const token= sessionStorage.getItem("accessToken"); 
  const navigate = useNavigate();
  const { id } = useParams();
  const[allApps, setAllApps] = useState();
  const[allNotes, setAllNotes] = useState();

  const getAllApp = () => {
    axios.get(`http://localhost:8080/api/thedevhub/application/${id}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
    .then((res) => {setAllApps(res.data)})
  }

  const getNotes = () => {
    axios.get(`http://localhost:8080/api/thedevhub/note/${id}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
    .then((res) => {setAllNotes(res.data)})
  }

  const deleteApp = () =>{
    axios.delete(`http://localhost:8080/api/thedevhub/application/delete/${id}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
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
        <p>{note.content}</p>
        <button onClick={() => deleteNote(note._id)}>Delete a note</button>
      </div>
    )
  })

  const deleteNote = (noteId) => {
    axios.delete(`http://localhost:8080/api/thedevhub/note/delete/${noteId}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
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
      <button>
        <Link to={`/myhub/application/${id}/update`}>
        Update
        </Link>
      </button>
      <button onClick={deleteApp}>
        Delete
      </button>
        </div>
      <div className='w-1/4'>
        <h1>Notes</h1>
        <button><Link to={`/myhub/application/${id}/note/add`} >Add Note</Link></button>
        <div>{noteData}</div>
      </div>
    </div>

  </div>
)
}

export default ApplicationDetails