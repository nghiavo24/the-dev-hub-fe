import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ApplicationCreate = ({uid}) => {
    const token = sessionStorage.getItem("accessToken");
    const navigate = useNavigate()
    const [newApp, setNewApp] = useState({
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
            await axios.post('https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/create', newApp, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            navigate('/myhub')
        } catch (err) {
            console.log(err)
        }
    }

    const handleAppCreate = (e) => {
        e.preventDefault()
        const newAppInput = { ...newApp };
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
            <div className='font-lora flex justify-center text-4xl overflow-hidden text-center'>Create New Application</div>
            <div className="flex justify-center">
                <form onSubmit={createNewApp} className='font-montserrat w-3/4 md:w-1/2 lg:w-1/3 my-4 px-3 flex flex-col bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
                    <input
                        className="mt-5"
                        type='text'
                        placeholder='Job title'
                        name='title' value={newApp.title}
                        onChange={handleAppCreate} required />
                    <br />
                    <input
                        type='text'
                        placeholder='Company'
                        name='company' value={newApp.company}
                        onChange={handleAppCreate} required />
                    <br />
                    <input
                        type='date'
                        placeholder='Date applied'
                        name='applied'
                        value={newApp.applied}
                        onChange={handleAppCreate} />
                    <br />
                    <input
                        type='text'
                        placeholder='Name of recruiter/hiring manager'
                        name='hiring_manager' value={newApp.hiring_manager}
                        onChange={handleAppCreate} />
                    <br />
                    <input
                        type='number'
                        placeholder='Compensation (ex. 95000)'
                        name='compensation'
                        value={newApp.compensation}
                        onChange={handleAppCreate} />
                    <br />
                    <select
                        name='work_site'
                        value={newApp.work_site}
                        onChange={handleAppCreate} >
                        <option value="Remote">Remote</option>
                        <option value="In-person">In-person</option>
                        <option value="Hybrid">Hybrid</option>

                    </select>
                    <br />
                    <input
                        type='text'
                        placeholder='Job location'
                        name='location' value={newApp.location}
                        onChange={handleAppCreate} />
                    <br />
                    <input
                        type='url'
                        placeholder='Job URL'
                        name='url' value={newApp.url}
                        onChange={handleAppCreate} />
                    <br />
                    <button type="submit" className="font-lobster rounded-lg text-lg my-5 px-2 py-2 text-white tracking-wider bg-air-blue outline-none mx-10">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ApplicationCreate