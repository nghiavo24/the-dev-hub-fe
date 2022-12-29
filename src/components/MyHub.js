import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
const [allApplications, setAllApplications] = useState('')

const navigate = useNavigate()

const handleGet = async (id) => {
    const res = await axios.get('https://localhost8080/thedevhub/applications' + id)
    console.log(res);
    navigate(0)
}

const MyHub = () => {
  return (
    <div className='myhub'>
        <h1>MyHub</h1>
            <Link to='/application/add'>
           <button> Create a job post</button>
            </Link>
        <div>
            <ul>
                {allApplications.map((application, id) => {
                    return <li key={id}>
                        {application.title} - {application.company} - {application.applied} - {application.hiring_managaer} - {application.work_site} - {application.location} - {application.url}
                    </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default MyHub