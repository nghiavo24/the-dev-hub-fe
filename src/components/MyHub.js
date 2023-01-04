import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyHub = ({ uid }) => {
    const [allApplications, setAllApplications] = useState();
    const token = sessionStorage.getItem("accessToken");
    const navigate = useNavigate();

    const fetchData = async (token) => {
            const res = await axios.get('http://localhost:8080/api/thedevhub/application', {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            setAllApplications(res.data)
        }
    useEffect(()=>{
            if(token){
            fetchData(token);
            } else{
                navigate('/')
                alert ('You need to sign in!')
            }
        },[]);

    if (allApplications === undefined) return;

    const filteredList = allApplications.filter(apps => {
        return apps.user_id === uid
    })
    
    const displayList = filteredList.map((app, index) =>{
    return(
        <div key={index} className="container gap-4 p-5 border text-center my-5 border-gray-300 bg-white shadow-lg shadow-air-blue rounded-lg">
            <div class="p-5">
            <p className="text-2xl font-bold text-dark-salmon">{app.company}</p>
            <p className="text-lg my-4">{app.title}</p>
            <p>{app.applied}</p>
            <Link to={`/myhub/application/${app._id}`}>
            <button className="bg-air-blue text-white group-hover:text-white rounded-lg py-2 px-4 my-4">View Details</button>
            </Link>
        </div>
    </div>
    )
})

  return (
    <div>
        <h1 className='text-4xl text-center mx-44'>MyHub</h1>
            <Link to='/myhub/application/create'>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mx-14">
                <div class="absolute inset-0 w-3 bg-paolo-green transition-all duration-[800ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">Create application</span>
            </button>
            </Link>
           <div className="container grid grid-cols-1 gap-4 mx-auto py-9 justify-around md:grid-cols-2 lg:grid-cols-4">{displayList}</div>
    </div>
  )
}

export default MyHub