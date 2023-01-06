import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const NoteCreate = () => {
    const token= sessionStorage.getItem("accessToken"); 
    const { id } = useParams();
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState({
        content: "",
        application: id
    })

    const createNewNote = async (e) => {
        e.preventDefault()
        try{
            await axios.post(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/note/create/${id}`, newNote, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            navigate(`/myhub/application/${id}`)
        } catch (err){
            console.log(err)
        }
    }

    const handleInput = (e) => {
        e.preventDefault()
        const newNoteInput = { ...newNote }
        newNoteInput[e.target.name] = e.target.value
        setNewNote(newNoteInput)
    }

    return (
        <div>
            <div className='font-lora text-4xl text-center flex justify-center'>Add Note</div>
            <div className="flex justify-center">
                <form onSubmit={createNewNote} className='font-montserrat w-3/4 md:w-1/2 lg:w-1/4  my-4 px-3 flex flex-col bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
                    <input
                        className="mt-5"
                        type='text'
                        placeholder='Content'
                        name='content'
                        value={newNote.content}
                        onChange={handleInput}
                        required />
                    <br />
                    <div className="flex justify-center my-8 mt-0">
                        <button className="font-lobster rounded-lg text-lg mx-2 px-5 py-2  text-white tracking-wider bg-paolo-green outline-none"><Link to={`/myhub/application/${id}`}>Back</Link></button>
                        <button className="font-lobster rounded-lg text-lg mx-2 px-3 py-2  text-white tracking-wider bg-air-blue outline-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NoteCreate