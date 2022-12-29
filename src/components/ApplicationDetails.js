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


return(
  <div>
    <div>{allApps.title}
    </div>
    <div></div>
  </div>
)


    
}

export default ApplicationDetails