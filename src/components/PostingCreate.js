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
        alert ('You need to sign in!')
      }
    } ,[] )
    
    return(
    <div>
        <h3 className='text-4xl text-center mx-44 text-dark-salmon' > Create a Posting</h3>
        <div class="flex justify-center ">
        <form class="mx-4 my-4 px-3 flex flex-col w-3/5 shadow-lg shadow-air-blue rounded-lg border-gray-300 border"  onSubmit={createNewPost}>
                <input class="mt-5"type="text"  name='title' value={post.title}  onChange={createAPost} placeholder="Job title"/>
                <br/>
                <input  type="text" name="company" value={post.company} onChange={createAPost} placeholder="Company" />
                <br/>
                <input   type="date" name="posted" value={post.posted} onChange={createAPost} placeholder="date" />
                <br/>
                <input  type='url' name='url' value={post.url}  onChange={createAPost} placeholder="Job URL"/>
                <br/>
                <input   type="text" name="note" value={post.note} onChange={createAPost} placeholder="Notes" />
                <br/>
                <button class="rounded-lg text-lg my-5 px-2 py-2 text-white tracking-wider bg-air-blue outline-none mx-10"  type="submit"> Create Posting </button>
        </form>
        </div>
      </div>
    )
}

export default PostingCreate