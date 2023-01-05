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
            <h1 className='font-lora text-4xl text-center mx-44 mt-4'>Posting Details</h1>
            <div className="flex justify-center">
            <div className="max-w-md mx-10 py-8 px-16 border-gray-300 border shadow-lg shadow-air-blue rounded-lg my-20">
               <p className="font-lora text-3xl my-4 text-air-blue">Company: <span className="font-montserrat text-xl text-black">{postDetails.company}</span></p> 
               <p className="font-lora text-3xl  text-air-blue">Title: < span className="font-montserrat text-xl  text-black">{postDetails.title}</span></p> 
               <p className="font-lora text-3xl my-4 text-air-blue">Posted: <span className="font-montserrat text-xl  text-black">{postDetails.posted}</span></p> 
               <p className="font-lora text-3xl  text-air-blue">Note: <span className="font-montserrat text-xl  text-black"> {postDetails.note}</span></p>                
               <p className="font-lora text-3xl my-4 text-air-blue">Link:<a href={postDetails.url}><FaExternalLinkAlt className='text-black' /></a></p> 
            </div>
            </div>
            <div className="flex justify-center ">
            <form className="mx-4 my-4 px-3 flex flex-col w-2/5 shadow-lg shadow-air-blue rounded-lg border-gray-300 border" updatingPost={updatingPost}>
            <h3 className='font-lora text-3xl text-center my-4'>Edit Form</h3>
                <input className="font-montserrat my-4 mx-10" type="text" name="company" value={postUpdate.company} onChange={updateAPost} placeholder="Company Name" required/>
                <input className="font-montserrat mx-10"  type="text" name='title' value={postUpdate.title}  onChange={updateAPost} placeholder="Job Title" required/>
                <input className="font-montserrat my-4 mx-10" type="date" name="posted" value={postUpdate.posted} onChange={updateAPost} placeholder="date" />
                <input className="font-montserrat mx-10"  type='url' name='url' value={postUpdate.url}  onChange={updateAPost} placeholder="URL"/>
                <input className="font-montserrat my-4 mx-10"  type="text" name="note" value={postUpdate.note} onChange={updateAPost} placeholder="Note/Comment" />

                <button className="font-lobster rounded-lg text-lg px-4 py-2 my-4 mx-10 tracking-wider bg-yellow-crayola text-white outline-none" onClick={updatingPost}>Update Post</button>
                <button className="font-lobster rounded-lg text-lg px-4 py-2 my-4 mx-10 tracking-wider bg-dark-salmon text-white outline-none" onClick={deletePost}>Delete a Post</button>
            </form>   
             </div>
        </div>
    )
}

export default PostingDetails

