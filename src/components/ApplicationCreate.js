import React, {useState} from 'react';
import axios from 'axios';


const ApplicationCreate = () => {
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
            await axios.post('/application/add')
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
        <form onSubmit={createNewApp}>
        <input placeholder='Job title' name='title' value={newApp.title} onChange={handleAppCreate} required />
        <input placeholder='Company' name='company' value={newApp.company} onChange={handleAppCreate} required />
        <input placeholder='Date applied' name='applied' value={newApp.applied} onChange={handleAppCreate} />
        <input placeholder='Name of recruiter/hiring manager' name='hiring_manager' value={newApp.hiring_manager} onChange={handleAppCreate} required />
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