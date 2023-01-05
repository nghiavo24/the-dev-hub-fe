import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyHub = ({ uid }) => {
    const [allApplications, setAllApplications] = useState();
    const token = sessionStorage.getItem("accessToken");
    const navigate = useNavigate();

    const fetchData = async (token) => {
            const res = await axios.get('https://the-dev-hub-app.herokuapp.com/api/thedevhub/application', {
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
        <div key={index} className="font-montserrat container gap-4 p-5 border text-center my-5 border-gray-300 bg-white shadow-lg shadow-air-blue rounded-lg">
            <div className="p-5">
            <p className="italic text-2xl font-bold text-dark-salmon">{app.company}</p>
            <p className="text-lg my-4">{app.title}</p>
            <p>{app.applied}</p>
            <Link to={`/myhub/application/${app._id}`}>
            <button className="font-lobster bg-air-blue text-white group-hover:text-white rounded-lg py-2 px-4 my-4">View Details</button>
            </Link>
        </div>
    </div>
    )
})

  return (
    <div>
        <h1 className='font-lora text-4xl text-center mx-44'>My Hub</h1>
           <div className="container grid grid-cols-1 gap-4 mx-auto px-5 py-9 justify-around md:grid-cols-2 lg:grid-cols-4">{displayList}</div>
    </div>
  )
}

export default MyHub