import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


export default function PostingCreate() {
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
        await axios.post('https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/create')
        navigate("/mainhub");
    } catch(err){
        console.log(err)
    }}


      const createAPost = (e) => {
        e.preventDefault();
        const newPostInput = {...post};
        newPostInput[e.target.name] = e.target.value;
        setPost(newPostInput);
    }
console.log(post);
console.log(setPost);
    return(
    <div>
        <form onSubmit={createNewPost}>
                <h3> Create a Posting</h3>
                <label>Title</label>
                <input type="text" name='title' value={post.title}  onChange={createAPost} placeholder="add job title"/>
                <label>Company Name</label>
                <input type="text" name="company" value={post.company} onChange={createAPost} placeholder="add company name" />
                <label >Date Posted</label>
                <input type="date" name="posted" value={post.posted} onChange={createAPost} placeholder="date" />
                <label>URL</label>
                <input  type='url' name='url' value={post.url}  onChange={createAPost} placeholder="url link"/>
                <label>Note</label>
                <input type="text" name="note" value={post.note} onChange={createAPost} placeholder="notes" />
              <button  type="submit"> Create Posting </button>
        </form>
      </div>
    )
}