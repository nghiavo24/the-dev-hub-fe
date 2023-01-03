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
        <div key={index} className="flex flex-wrap px-9 py-7 flex-col border mx-5 my-5">
            <p className="text-2xl font-bold text-blue-900">{app.company}</p>
            <p>{app.title}</p>
            <p>{app.applied}</p>
            <Link to={`/myhub/application/${app._id}`}>
            <button className="bg-dark-salmon">View Details</button>
            </Link>
        </div>
    )
})
  return (
    <div>
        <h1 className='text-4xl text-center mx-44'>MyHub</h1>
            <Link to='/myhub/application/create'>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-blue-500 transition-all duration-[800ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">Create application</span>
            </button>
            </Link>
           <div className="flex flex-wrap">{appList}</div>
    
    </div>
  )
}

export default MyHub