import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ApplicationCreate = () => {
    const navigate = useNavigate()
    const[newApp, setNewApp] = useState({
        title: "",
        company: "",
        applied: "",
        hiring_manager: "",
        compensation: "",
        work_site: "",
        location: "",
        url:""
    })

    const createNewApp = async (e) => {
        e.preventDefault();
        try{
            await axios.post('https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/create', newApp)
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

    console.log(newApp)
  return (
    <div>
        <div>Create New Application</div>
        <form onSubmit={createNewApp}className='border-3 border-gray-500 mx-7'>
            <input 
            type='text' placeholder='Job title' name='title' value={newApp.title} onChange={handleAppCreate} required />
            <br />
            <input type='text' placeholder='Company' name='company' value={newApp.company} onChange={handleAppCreate} required />
            <br />
            <input type='date' placeholder='Date applied' name='applied' value={newApp.applied} onChange={handleAppCreate} />
            <br />
            <input type='text' placeholder='Name of recruiter/hiring manager' name='hiring_manager' value={newApp.hiring_manager} onChange={handleAppCreate}/>
            <br />
            <input type='text' placeholder='Compensation' name='compensation' value={newApp.compensation} onChange={handleAppCreate} />
            <br />
            <input type='text' placeholder='Remote/In-person/Hybrid' name='work_site' value={newApp.work_site} onChange={handleAppCreate}  />
            <br />
            <input type='text' placeholder='Job location' name='location' value={newApp.location} onChange={handleAppCreate} />
            <br />
            <input type='url' placeholder='Job URL' name='url' value={newApp.url} onChange={handleAppCreate} />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ApplicationCreate