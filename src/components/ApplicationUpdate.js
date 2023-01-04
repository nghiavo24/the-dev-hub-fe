import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appUpdate, setAppUpdate] = useState({
        title: "",
        company: "",
        applied: "",
        hiring_manager: "",
        compensation: "",
        work_site: "",
        location: "",
        url: "",
    })

    const appUpdateCall = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/update/${id}`, appUpdate)
            navigate(`/myhub/application/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    const handleAppUpdate = (e) => {
        e.preventDefault()
        const appUpdateInput = { ...appUpdate }
        appUpdateInput[e.target.name] = e.target.value;
        setAppUpdate(appUpdateInput);
    }

    return (
        <div>
            <div className='text-4xl text-center mx-44'>Update an Application</div>
            <div className="flex justify-center">
            <form onSubmit={appUpdateCall} className='w-3/5 my-4 px-3 flex flex-col bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
                <input
                    className='mt-5'
                    placeholder='Job title'
                    type='text'
                    name='title'
                    value={appUpdate.title}
                    onChange={handleAppUpdate}
                    required />
                <br />
                <input
                    placeholder='Company'
                    type='text'
                    name='company'
                    value={appUpdate.company}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <input
                    placeholder='Date applied'
                    type='date'
                    name='applied'
                    value={appUpdate.applied}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <input
                    placeholder='Name of recruiter/hiring manager'
                    type='text'
                    name='hiring_manager'
                    value={appUpdate.hiring_manager}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <input
                    placeholder='Compensation'
                    type='text'
                    name='compensation'
                    value={appUpdate.compensation}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <select
                    name='work_site'
                    value={appUpdate.work_site}
                    onChange={handleAppUpdate} 
                    required>
                    <option value="Remote">Remote</option>
                    <option value="In-person">In-person</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <br />
                <input
                    placeholder='Job location'
                    type='text'
                    name='location'
                    value={appUpdate.location}
                    onChange={handleAppUpdate}
                    required />
                <br />
                <input
                    placeholder='Job URL'
                    type='text'
                    name='url'
                    value={appUpdate.url}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <button className="rounded-lg text-lg my-5 px-2 py-2 text-white tracking-wider bg-air-blue outline-none mx-10">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default ApplicationUpdate