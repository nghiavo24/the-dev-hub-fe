import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link} from 'react-router-dom';
import {FaExternalLinkAlt} from 'react-icons/fa'

const ApplicationDetails = () => {
  const token= sessionStorage.getItem("accessToken"); 
  const navigate = useNavigate();
  const { id } = useParams();
  const[allApps, setAllApps] = useState();
  const[allNotes, setAllNotes] = useState();

  const getAllApp = () => {
    axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/${id}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
    .then((res) => {setAllApps(res.data)})
  }

  const getNotes = () => {
    axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/note/${id}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
    .then((res) => {setAllNotes(res.data)})
  }

  const deleteApp = () =>{
    axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/delete/${id}`, {
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
      <div key ={index} className='bg-yellow-note py-4 px-4 mb-5 rounded-lg shadow-lg text-center'> 
        <p className="font-montserrat">{note.content}</p>
        <button 
          onClick={() => deleteNote(note._id)} 
          className="font-lobster bg-dark-salmon text-white tracking-wider rounded-lg py-2 px-4 mt-8">
            Delete
        </button>
      </div>
    )
  })

  const deleteNote = (noteId) => {
    axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/note/delete/${noteId}`, {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
    .then((res) => {window.location.reload()})
  }

return(
  <div>
    <div className='font-lora flex justify-center text-4xl border'>Application Details</div>
    <div className='mt-0'>
      <div className='w-3/4 max-w-md mx-10 mt-10 py-4 px-8 bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
      <p className="font-lora text-2xl text-air-blue">Company: </p><span className="font-montserrat text-base">{allApps.company}</span>
      <p className="font-lora text-2xl text-air-blue">Job Title: </p><span className="font-montserrat text-base">{allApps.title}</span>
      <p className="font-lora text-2xl text-air-blue">Date applied:</p> <span className="font-montserrat text-base">{allApps.applied}</span>
      <p className="font-lora text-2xl text-air-blue">Recruiter/Hiring Manager:</p> <span className="font-montserrat text-base">{allApps.hiring_manager}</span>
      <p className="font-lora text-2xl text-air-blue">Work Site:</p> <span className="font-montserrat text-base">{allApps.work_site}</span>
      <p className="font-lora text-2xl text-air-blue">Location:</p> <span className="font-montserrat text-base">{allApps.location}</span>
      <p className="font-lora text-2xl text-air-blue">Link:</p><a href={allApps.url}><FaExternalLinkAlt/></a>
      <br />
      <div className="flex justify-between justify-items-center">
        <button className="font-lobster bg-yellow-crayola text-white py-2 px-4 rounded-lg tracking-wider">
          <Link to={`/myhub/application/${id}/update`}>
          Update
          </Link>
        </button>
        <button className="font-lobster bg-dark-salmon text-white py-2 px-5 rounded-lg tracking-wider" onClick={deleteApp}>
          Delete
        </button>
      </div>
        </div>
      <div className='border-2 border-red-500'>
        <h1 className="font-lora mt-14 text-4xl flex justify-center">Notes</h1>
        <div className="flex justify-center">
          <button className=" font-lobster bg-paolo-green text-white py-2 px-4 rounded-lg tracking-wider mb-4 mt-5"><Link to={`/myhub/application/${id}/note/add`} >Add Note</Link></button>
        </div>
        <div className="w-3/4 grid grid-row gap-5 mx-12 md:mx-24">{noteData}</div>
      </div>
    </div>
  </div>
)
}

export default ApplicationDetails