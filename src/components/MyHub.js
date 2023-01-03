import axios, { all } from 'axios'
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

const appList = allApplications.map((app, index) => {
    return(
        <div key={index} className="p-6 border mx-auto my-5 border-blonde bg-white shadow-lg rounded-lg">
            <div class="container grid grid-cols-2 gap-4">
            <p className="text-2xl font-bold text-dark-salmon">{app.company}</p>
            <p className="text-lg">{app.title}</p>
            <p className="py-2">{app.applied}</p>
            <Link to={`/myhub/application/${app._id}`}>
            <button className="bg-air-blue text-white group-hover:text-white rounded-lg py-2 px-4">View Details</button>
            </Link>
        </div>
    </div>
    )
})
  return (
    <div>
        <h1 className='text-4xl text-center mx-44'>MyHub</h1>
            <Link to='/myhub/application/create'>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-paolo-green transition-all duration-[800ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">Create application</span>
            </button>
            </Link>
           <div className="container grid grid-cols-2 gap-4">{appList}</div>
    
    </div>
  )
}

export default MyHub