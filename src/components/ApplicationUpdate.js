import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplicationUpdate = () => {
    const[appUpdate, setAppUpdate] = useState({
        title: "",
        company: "",
        applied: "",
        hiring_manager: "",
        compensation: "",
        work_site: "",
        location: "",
        url:""
    })
    


    const handleAppUpdate = (e) => {
        e.preventDefault()
        const appUpdateInput = {...appUpdate}
        appUpdateInput[e.target.value] = e.target.value;
        setAppUpdate(appUpdateInput);
    }
  
    return (
    <div>
        <div>Update an Application</div>
        <form onSubmit={createNewApp}>
        <input placeholder='Job title' name='title' value={appUpdate.title} onChange={handleAppCreate} required />
        <input placeholder='Company' name='company' value={appUpdate.company} onChange={handleAppCreate} required />
        <input placeholder='Date applied' name='applied' value={appUpdate.applied} onChange={handleAppCreate} />
        <input placeholder='Name of recruiter/hiring manager' name='hiring_manager' value={appUpdate.hiring_manager} onChange={handleAppCreate} required />
        <input placeholder='Compensation' name='compensation' value={appUpdate.compensation} onChange={handleAppCreate} />
        <input placeholder='Remote/In-person/Hybrid' name='work_site' value={appUpdate.work_site} onChange={handleAppCreate}  />
        <input placeholder='Job location' name='location' value={appUpdate.location} onChange={handleAppCreate} />
        <input placeholder='Job URL' name='url' value={appUpdate.url} onChange={handleAppCreate} />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default ApplicationUpdate