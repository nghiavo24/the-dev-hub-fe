import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link} from 'react-router-dom';

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
      <div key ={index} className='bg-yellow-crayola py-4 px-4 mb-5 rounded-lg shadow-lg text-center'>
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
      <div className='w-3/4 max-w-md mx-10 my-20 py-4 px-8 bg-white shadow-lg rounded-lg border-air-blue border'>
      <p className="text-2xl text-dark-salmon">Job Title: </p><span className="text-base">{allApps.title}</span>
      <p className="text-2xl text-paolo-green">Company: </p><span className="text-base">{allApps.company}</span>
      <p className="text-2xl text-air-blue">Date applied:</p> <span className="text-base">{allApps.applied}</span>
      <p className="text-2xl">Recruiter/Hiring Manager:</p> <span className="text-base">{allApps.hiring_manager}</span>
      <p className="text-2xl">Work Site:</p> <span className="text-base">{allApps.work_site}</span>
      <p className="text-2xl">Location:</p> <span className="text-base">{allApps.location}</span>
      <p className="text-2xl">Link:</p><a href={allApps.url} target="_blank">Click to view job!</a>
      <br />
      <button>
        <Link to={`/myhub/application/${id}/update`}>
        Update
        </Link>
      </button>
        </div>
      <div className='w-1/4'>
        <h1 className="my-20 text-2xl py-4 px-8 bg-white shadow-lg rounded-lg border-dark-salmon border">Notes</h1>
        <button><Link to={`/myhub/application/${id}/note/add`} >Add Note</Link></button>
        <div>{noteData}</div>
      </div>
    </div>

  </div>
)
}

export default ApplicationDetails