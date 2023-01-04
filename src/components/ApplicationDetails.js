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
      <div key ={index} className='bg-yellow-crayola py-4 px-4 mb-5 rounded-lg shadow-lg text-center'> 
        <p>{note.content}</p>
        <button onClick={() => deleteNote(note._id)} className="bg-dark-salmon text-white tracking-wider rounded-lg py-2 px-4 mt-8">Delete</button>
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
      <div className='w-3/4 max-w-md mx-10 my-20 py-4 px-8 bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
      <p className="text-2xl text-air-blue">Job Title: </p><span className="text-base">{allApps.title}</span>
      <p className="text-2xl text-air-blue">Company: </p><span className="text-base">{allApps.company}</span>
      <p className="text-2xl text-air-blue">Date applied:</p> <span className="text-base">{allApps.applied}</span>
      <p className="text-2xl text-air-blue">Recruiter/Hiring Manager:</p> <span className="text-base">{allApps.hiring_manager}</span>
      <p className="text-2xl text-air-blue">Work Site:</p> <span className="text-base">{allApps.work_site}</span>
      <p className="text-2xl text-air-blue">Location:</p> <span className="text-base">{allApps.location}</span>
      <p className="text-2xl text-air-blue">Link:</p><a href={allApps.url} target="_blank"><button className="bg-air-blue text-white rounded-lg px-4 py-2 tracking-wider">Visit Site</button></a>
      <br />
      <button className="bg-paolo-green text-white py-2 px-4 rounded-lg mt-20 tracking-wider mx-14">
        <Link to={`/myhub/application/${id}/update`}>
        Update
        </Link>
      </button>
      <button className="bg-dark-salmon text-white py-2 px-4 rounded-lg mt-5 tracking-wider mx-4" onClick={deleteApp}>
        Delete
      </button>
        </div>
      <div className='w-1/4'>
        <h1 className="mt-20 text-2xl py-4 px-8 bg-white shadow-lg rounded-lg border-gray-300 border">Notes</h1>
        <button className="bg-paolo-green text-white py-2 px-4 rounded-lg tracking-wider mb-4 mt-5"><Link to={`/myhub/application/${id}/note/add`} >Add Note</Link></button>
        <div className="">
        <div className="">{noteData}</div>
      </div>
      </div>
    
    </div>

  </div>
)
}

export default ApplicationDetails