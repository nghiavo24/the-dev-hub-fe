import axios, { all } from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
 


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

const appList = allApplications.map((app, index) => {
    return(
        <div key={index}>
            <div>{app.title}</div>
            <div>{app.company}</div>
            <div>{app.applied}</div>

        </div>
    )
})


  return (
    <div className='myhub'>
        <h1>MyHub</h1>
            <Link to='/application/add'>
           <button> Create a job post</button>
            </Link>

           <div>{appList}</div>
    </div>
  )
}

export default MyHub