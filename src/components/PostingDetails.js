import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaExternalLinkAlt } from 'react-icons/fa';
const PostingDetails = () => {
    const token = sessionStorage.getItem("accessToken");
    const navigate = useNavigate();
    const { id } = useParams();

    const [postDetails, setPostDetails] = useState();
    const [postUpdate, setPostUpdate] = useState({
        title: "",
        company: "",
        posted: "",
        url: "",
        note: "",
    });
    const getPostings = () => {
        axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                setPostDetails(res.data)
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getPostings()
    }, [])
    if (postDetails === undefined) return


    const deletePost = () => {
        axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        navigate('/mainhub')
    }

    const updatingPost = async (e) => {
        e.preventDefault();
        const editedPost = {
            title: postUpdate.title,
            company: postUpdate.company,
            posted: postUpdate.posted,
            url: postUpdate.url,
            note: postUpdate.note,
        };

        try {
            await axios.put(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/update/${id}`, editedPost, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const updateAPost = (e) => {
        e.preventDefault();
        const updatePostInput = { ...postUpdate };
        updatePostInput[e.target.name] = e.target.value;
        setPostUpdate(updatePostInput);
    }

    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        let newDate = `${month}-${day}-${year}`;
        return newDate;
      };

    return (
        <div>
            <h1 className='flex justify-center mt-8 font-lora text-3xl text-center'>Posting Details</h1>
            <div className="flex justify-center ">
                <div className="w-4/8 px-10 mx-5 py-8 flex flex-col  sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12     shadow-lg shadow-air-blue  border-gray-300 border rounded-lg mt-10">
                    <p className="font-lora text-2xl md:text-3xl lg:text-3xl xl:text-3xl  text-air-blue">Company: </p> <span className="font-montserrat text-lg  lg:text-lg text-black">{postDetails.company}</span>
                    <p className="font-lora text-2xl md:text-3xl lg:text-3xl xl:text-3xl  mt-4  text-air-blue">Title: </p> < span className="font-montserrat text-lg lg:text-lg  text-black">{postDetails.title}</span>
                    <p className="font-lora text-2xl md:text-3xl lg:text-3xl xl:text-3xl mt-4 text-air-blue">Posted: </p> <span className="font-montserrat text-lg lg:text-lg text-black">{formatDate(postDetails.posted)}</span>
                    <p className="font-lora text-2xl md:text-3xl lg:text-3xl xl:text-3xl mt-4  text-air-blue">Note: </p>  <span className="font-montserrat text-lg lg:text-lg text-black"> {postDetails.note}</span>
                    <p className="font-lora text-2xl md:text-3xl lg:text-3xl xl:text-3xl my-4 text-air-blue">Link:<a target='_blank' href={postDetails.url}><FaExternalLinkAlt className='text-black mt-4 mx-2' /></a></p>
                    <div className=" flex justify-center  ">
                        <button className="hover:bg-black font-lobster rounded-lg text-lg tracking-wider px-10 py-2  bg-dark-salmon text-white outline-none " onClick={deletePost}>Delete</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <form className=" w-4/8 mt-10 px-10  flex flex-col sm:w-10/12  md:w-8/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12  shadow-lg shadow-air-blue rounded-lg border-gray-300 border " updatingPost={updatingPost}>
                    <h3 className='font-lora text-3xl text-center my-4'>Edit Form</h3>
                    <div className="flex flex-col">
                        <input className="font-montserrat my-4 " type="text" name="company" value={postUpdate.company} onChange={updateAPost} placeholder="Company Name" required />
                        <input className="font-montserrat " type="text" name='title' value={postUpdate.title} onChange={updateAPost} placeholder="Job Title" required />
                        <input className="font-montserrat my-4 " type="date" name="posted" value={postUpdate.posted} onChange={updateAPost} placeholder="date" />
                        <input className="font-montserrat " type='url' name='url' value={postUpdate.url} onChange={updateAPost} placeholder="URL" />
                        <input className="font-montserrat my-4 " type="text" name="note" value={postUpdate.note} onChange={updateAPost} placeholder="Note/Comment" />
                    </div>
                    <div className="flex justify-center"> 
                        <button className="hover:bg-paolo-green font-lobster rounded-lg text-lg px-10 py-2 my-3 mb-5 tracking-wider bg-yellow-crayola text-white outline-none" onClick={updatingPost}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostingDetails

