import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
 


const MyHub = () => {
const [allApplications, setAllApplications] = useState()

const fetchData = async () => {
        const res = await axios.get('https://the-dev-hub-app.herokuapp.com/api/thedevhub/application')
        setAllApplications(res.data)
    }

useEffect(()=>{
    fetchData();
   },[]);

if (allApplications === undefined) return;




  return (
    <div className='myhub'>
        <h1>MyHub</h1>
            <Link to='/application/add'>
           <button> Create a job post</button>
            </Link>
    </div>
  )
}

export default MyHub