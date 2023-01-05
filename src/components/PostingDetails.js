import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FaExternalLinkAlt} from 'react-icons/fa';
const PostingDetails= () => {
    const token= sessionStorage.getItem("accessToken"); 
    const navigate = useNavigate();
    const { id } = useParams();

    const[postDetails, setPostDetails] = useState();
    const [postUpdate, setPostUpdate] = useState({
        title: "",
        company: "",
        posted: "",
        url: "",
        note: "",
      });
    const getPostings = () => {
        axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/${id}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setPostDetails(res.data)
        })
        .catch(err => console.error(err))
    }
    useEffect(() =>{
        getPostings()
      } ,[] )
    if(postDetails === undefined) return
    
    
    const deletePost = () => {
        axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/delete/${id}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        navigate('/mainhub')
    }

    const updatingPost= async (e) => {
        e.preventDefault();
        const editedPost = {
          title: postUpdate.title,
          company: postUpdate.company,
          posted: postUpdate.posted,
          url: postUpdate.url,
          note: postUpdate.note,
        };

        try{
            await axios.put(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/update/${id}`, editedPost, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }

    const updateAPost = (e) => {
        e.preventDefault();
        const updatePostInput = {...postUpdate};
        updatePostInput[e.target.name] = e.target.value;
        setPostUpdate(updatePostInput);
    }

 
    return(     
        <div>
            <h1 className='flex justify-center mt-8 font-lora text-4xl text-center'>Posting Details</h1>
            <div className="flex justify-center ">
            <div className="w-6/8 px-20 mx-2 py-8 flex flex-col  sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12     shadow-lg shadow-air-blue  border-gray-300 border rounded-lg mt-10">
               <p className="font-lora text-3xl  text-air-blue">Company: </p> <span className="font-montserrat text-xl text-black">{postDetails.company}</span>
               <p className="font-lora text-3xl mt-4  text-air-blue">Title: </p> < span className="font-montserrat text-xl  text-black">{postDetails.title}</span>
               <p className="font-lora text-3xl mt-4 text-air-blue">Posted: </p> <span className="font-montserrat text-xl  text-black">{postDetails.posted}</span>
               <p className="font-lora text-3xl mt-4  text-air-blue">Note: </p>  <span className="font-montserrat text-xl  text-black"> {postDetails.note}</span>
               <p className="font-lora text-3xl my-4 text-air-blue">Link:<a href={postDetails.url}><FaExternalLinkAlt className='text-black mt-4 mx-2' /></a></p>
               <button className="font-lobster rounded-lg text-lg px-4 py-2 mt-2 mx-10 tracking-wider bg-dark-salmon text-white outline-none" onClick={deletePost}>Delete a Post</button>
 
            </div>
            </div>
            <div className="flex justify-center  ">
            <form className="mx-2 my-4 px-20 flex flex-col w-6/8 sm:w-10/12  md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12  shadow-lg shadow-air-blue rounded-lg border-gray-300 border " updatingPost={updatingPost}>
            <h3 className='font-lora text-3xl text-center my-4'>Edit Form</h3>
            <div class="flex flex-col">
                <input className="font-montserrat my-4 " type="text" name="company" value={postUpdate.company} onChange={updateAPost} placeholder="Company Name" required/>
                <input className="font-montserrat "  type="text" name='title' value={postUpdate.title}  onChange={updateAPost} placeholder="Job Title" required/>
                <input className="font-montserrat my-4 " type="date" name="posted" value={postUpdate.posted} onChange={updateAPost} placeholder="date" />
                <input className="font-montserrat "  type='url' name='url' value={postUpdate.url}  onChange={updateAPost} placeholder="URL"/>
                <input className="font-montserrat my-4 "  type="text" name="note" value={postUpdate.note} onChange={updateAPost} placeholder="Note/Comment" />
                </div>
                <button className="font-lobster rounded-lg text-lg px-4 py-2 my-4 mx-10 tracking-wider bg-yellow-crayola text-white outline-none" onClick={updatingPost}>Update Post</button>
            </form>   
             </div>
        </div>
    )
}

export default PostingDetails

