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
        await axios.post('http://localhost:8080/api/thedevhub/posting/create', post, {
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

    useEffect((e) =>{
      if(token){
        createAPost(e)
      } else {
        navigate('/')
        alert ('You need to sign in!')
      }
    } ,[] )
    
    return(
    <div>
        <form  onSubmit={createNewPost}>
                <h3> Create a Posting</h3>
                <label>Title</label>
                <input type="text" name='title' value={post.title} onChange={createAPost} placeholder="Job Title"/>
                <label>Company Name</label>
                <input type="text" name="company" value={post.company} onChange={createAPost} placeholder="Company" />
                <label >Date Posted</label>
                <input type="date" name="posted" value={post.posted} onChange={createAPost} placeholder="Date" />
                <label>URL</label>
                <input name='url' value={post.url} onChange={createAPost} placeholder="URL"/>
                <label>Note</label>
                <input type="text" name="note" value={post.note} onChange={createAPost} placeholder="notes" />
              <button  type="submit"> Create Posting </button>
        </form>
      </div>
    )
}

export default PostingCreate