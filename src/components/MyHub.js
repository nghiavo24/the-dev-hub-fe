import axios, { all } from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import dlogo from '../assets/Dlogo.png'
 


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
        <div key={index} className="flex justify-around border-box p-2 flex-col">
            <p className="text-lg text-gray-500 font-bold">{app.company}</p>
            <p className="">{app.title}</p>
            <p>{app.applied}</p>
            <button
            className="text-center text-sm bg-blue-500 rounded py-2 text-white mt-2">
            <Link to={`/myhub/application/${app._id}`}>View details</Link>
            </button>
            
        </div>
    )
})
  return (
    <div className='w-screen'>
        <h1 className='text-4xl text-center'>MyHub</h1>
        <div>
            <img src={dlogo} alt="" className="flex justify-center items-center al h-32 w-auto my-0 py-0 border-black border-4"/>
        </div>
            <Link to='/application/add'>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">Create application</span>
            </button>
            </Link>
           <div className="w-screen flex flex-row gap-x-8 h-min p-1 border-box bg-white rounded xl ">{appList}</div>
    
    </div>
  )
}

export default MyHub