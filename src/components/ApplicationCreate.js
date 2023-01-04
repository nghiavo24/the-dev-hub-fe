import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ApplicationCreate = () => {
    const navigate = useNavigate()
    const [newApp, setNewApp] = useState({
        title: "",
        company: "",
        applied: "",
        hiring_manager: "",
        compensation: "",
        work_site: "",
        location: "",
        url: ""
    })

    const createNewApp = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/create', newApp)
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

    console.log(newApp)
    return (
        <div>
            <div className='text-4xl text-center mx-44'>Create New Application</div>
            <div className="flex justify-center">
                <form onSubmit={createNewApp} className='w-3/5 my-4 px-3 flex flex-col'>
                    <input
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
                        type='text'
                        placeholder='Compensation'
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
                    <button type="submit" className="rounded-lg text-lg mt-5 px-2 py-2 text-white tracking-wider bg-air-blue outline-none mx-10">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ApplicationCreate