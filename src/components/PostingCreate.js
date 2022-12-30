import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


export default function PostingCreate() {
    const [post, setPost] = useState({ topic: "", comments: "", image: "", });
    const navigate = useNavigate();
    

    const createNewPost = async (e) => {
    e.preventDefault();
    try{
        await axios.post('')
        navigate("/mainhub");
    } catch(err){
        console.log(err)
    }}


      const createAPost = (e) => {
        e.preventDefault()
        const newPostInput = {...post};
        newPostInput[e.target.name] = e.target.value;
        setPost(newPostInput);
    }
console.log(post);
console.log(setPost);
    return(
    <div>
        <form onSubmit={createNewPost}>
          <div>
                <h3> Create a Posting</h3>
                <label>Company Name</label>
                <input  name='title' value={post.title}  onChange={createAPost} placeholder="add posting"/>
                <label htmlFor="comments">Comments</label>
                <input type="text" name="comments" value={post.comments} onChange={createAPost} placeholder="add comments" />
                <label >Image</label>
  
                <input type="text" name="image" value={post.image} onChange={createAPost} placeholder="upload image" />
              <button className="create-button" type="submit"> Create Topic </button>
          </div>
        </form>
      </div>
    )
}