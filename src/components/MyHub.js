import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
 


const MyHub = ({token}) => {
const [allApplications, setAllApplications] = useState()

const fetchData = async(token)=>{
        const res = await axios.get('http://localhost:8080/thedevhub/application', {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        setAllApplications(res.data)
        console.log(res)
    }
console.log(allApplications)

useEffect(()=>{
    if(token){
     fetchData(token);
    }
   },[]);

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
                    {/* want to add functionality to be able to click on each application and take you to that speciifc appluication. Connect to application details */}
                    </li>
                })} 
            </ul>
        </div>
    </div>
  )
}

export default MyHub