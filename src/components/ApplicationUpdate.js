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
        url: ""
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
            <form onSubmit={appUpdateCall} className='mx-7 my-4 px-3 py-2'>
                <input
                    className='mx-7'
                    placeholder='Job title'
                    type='text'
                    name='title'
                    value={appUpdate.title}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7 my-3'
                    placeholder='Company'
                    type='text'
                    name='company'
                    value={appUpdate.company}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7'
                    placeholder='Date applied'
                    type='date'
                    name='applied'
                    value={appUpdate.applied}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7 my-3'
                    placeholder='Name of recruiter/hiring manager'
                    type='text'
                    name='hiring_manager'
                    value={appUpdate.hiring_manager}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7'
                    placeholder='Compensation'
                    type='text'
                    name='compensation'
                    value={appUpdate.compensation}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7 my-3'
                    placeholder='Remote/In-person/Hybrid'
                    type='text'
                    name='work_site'
                    value={appUpdate.work_site}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7'
                    placeholder='Job location'
                    type='text'
                    name='location'
                    value={appUpdate.location}
                    onChange={handleAppUpdate} />
                <br />
                <input
                    className='mx-7 my-3'
                    placeholder='Job URL'
                    type='text'
                    name='url'
                    value={appUpdate.url}
                    onChange={handleAppUpdate} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ApplicationUpdate