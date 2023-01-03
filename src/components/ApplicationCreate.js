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

    // const [sort, setSort] =useState()
    // function filterWork(work) {
    //     if(work === 'work_site'){
    //         setSort()
    //     }
    // }
  return (
    <div>
        <div className='text-4xl text-center mx-44'>Create New Application</div>
        <form onSubmit={createNewApp} className='mx-7 my-4 px-3 py-2'>
            <input 
                className='mx-7'
                type='text' 
                placeholder='Job title' 
                name='title' value={newApp.title} 
                onChange={handleAppCreate} required />
            <br />
            <input 
                className='mx-7 my-3'
                type='text' 
                placeholder='Company' 
                name='company' value={newApp.company} 
                onChange={handleAppCreate} required />
            <br />
            <input 
                className='mx-7'
                type='date' 
                placeholder='Date applied' 
                name='applied' 
                value={newApp.applied} 
                onChange={handleAppCreate} />
            <br />
            <input 
                className='mx-7 my-3'
                type='text' 
                placeholder='Name of recruiter/hiring manager' 
                name='hiring_manager' value={newApp.hiring_manager} 
                onChange={handleAppCreate}/>
            <br />
            <input 
                className='mx-7'
                type='text' 
                placeholder='Compensation' 
                name='compensation' 
                value={newApp.compensation} 
                onChange={handleAppCreate} />
            <br />
            {/* <select 
                className='mx-7 my-3'  
                name='work_site' 
                value={newApp.work_site}
                onChange={handleAppCreate} > 
                <option value="Remote">Remote</option>
                <option value="In-person">In-person</option>
                <option value="Hybrid">Hybrid</option>
                
            </select> */}
            <br />
            <input
                className='mx-7'
                type='text' 
                placeholder='Job location' 
                name='location' value={newApp.location} 
                onChange={handleAppCreate} />
            <br />
            <input 
                className='mx-7 my-3'
                type='url' 
                placeholder='Job URL' 
                name='url' value={newApp.url} 
                onChange={handleAppCreate} />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ApplicationCreate