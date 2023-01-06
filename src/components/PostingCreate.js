import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


const PostingCreate = () => {
    const token = sessionStorage.getItem("accessToken");
    const [post, setPost] = useState({ 
        title: "", 
        company: "", 
        posted: "", 
        url: "",
        note: "" 
    });
    const navigate = useNavigate();

    const createNewPost = async (e) => {
      e.preventDefault();
      try{
        await axios.post('https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/create', post, {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
      navigate('/mainhub')
      window.location.reload()
      } catch(err) {
        console.log(err);
      }  
    }

      const createAPost = (e) => {
        e.preventDefault();
        const newPostInput = {...post};
        newPostInput[e.target.name] = e.target.value;
        setPost(newPostInput);
    }

    useEffect(() =>{
      if(token){
        <></>
      } else {
        navigate('/')
        alert ('Please sign in!❗❗❗')
      }
    } ,[] )
    
    return(
    <div>
        < div className="flex justify-center ">
        <h3 className='font-lora text-3xl text-center py-5' >New Position</h3>
        </div>
        <div className="flex justify-center ">
        <form className="font-montserrat px-6 md:w-2/5    flex flex-col lg:w-2/5 shadow-lg shadow-air-blue rounded-lg border-gray-300 border "  onSubmit={createNewPost}>
                <input className="mt-5"type="text"  name='title' value={post.title}  onChange={createAPost} placeholder="Job title"/>
                <br/>
                <input  type="text" name="company" value={post.company} onChange={createAPost} placeholder="Company" />
                <br/>
                <input   type="date" name="posted" value={post.posted} onChange={createAPost} placeholder="date" />
                <br/>
                <input  type='url' name='url' value={post.url}  onChange={createAPost} placeholder="Job URL"/>
                <br/>
                <input   type="text" name="note" value={post.note} onChange={createAPost} placeholder="Notes" />
                <br/>
                <div className="flex justify-center">
                <button className="font-lobster rounded-lg mb-5 text-lg px-4 py-2 text-white tracking-wider bg-air-blue outline-none hover:bg-paolo-green"  type="submit"> Create  </button>
                </div>
        </form>
        </div>
      </div>
    )
}

export default PostingCreate