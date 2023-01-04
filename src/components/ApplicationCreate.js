import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ApplicationCreate = ({uid}) => {
    const token = sessionStorage.getItem("accessToken");
    const navigate = useNavigate()
    const[newApp, setNewApp] = useState({
        title: "",
        company: "",
        applied: "",
        hiring_manager: "",
        compensation: "",
        work_site: "",
        location: "",
        url:"",
        user_id: uid
    })

    const createNewApp = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:8080/api/thedevhub/application/create', newApp, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            navigate('/myhub')
        } catch(err){
            console.log(err)
        }
    }

    const handleAppCreate = (e) => {
        e.preventDefault()
        const newAppInput = {...newApp};
        newAppInput[e.target.name] = e.target.value;
        setNewApp(newAppInput);
    }

    useEffect(() =>{
        if(token){
          <></>
        } else {
          navigate('/')
          alert ('You need to sign in!')
        }
      } ,[] )

  return (
    <div>
        <div>Create New Application</div>
        <form onSubmit={createNewApp}>
        <input placeholder='Job title' name='title' value={newApp.title} onChange={handleAppCreate} required />
        <input placeholder='Company' name='company' value={newApp.company} onChange={handleAppCreate} required />
        <input placeholder='Date applied' name='applied' value={newApp.applied} onChange={handleAppCreate} />
        <input placeholder='Name of recruiter/hiring manager' name='hiring_manager' value={newApp.hiring_manager} onChange={handleAppCreate}/>
        <input placeholder='Compensation' name='compensation' value={newApp.compensation} onChange={handleAppCreate} />
        <input placeholder='Remote/In-person/Hybrid' name='work_site' value={newApp.work_site} onChange={handleAppCreate}  />
        <input placeholder='Job location' name='location' value={newApp.location} onChange={handleAppCreate} />
        <input placeholder='Job URL' name='url' value={newApp.url} onChange={handleAppCreate} />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default ApplicationCreate