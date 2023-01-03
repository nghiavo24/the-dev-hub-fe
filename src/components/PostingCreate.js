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
        await axios.post('https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/create', post)
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

    return(
    <div>
        <h3 className='text-4xl text-center border-black border-4 mx-44' > Create a Posting</h3>

        <form class="mx-10 my-10"  onSubmit={createNewPost}>
                <input class=" border-black border mx-7" type="text"  name='title' value={post.title}  onChange={createAPost} placeholder="add job title"/>
                <br/>
                <input class=" border-black border mx-7 my-3 " type="text" name="company" value={post.company} onChange={createAPost} placeholder="add company name" />
                <br/>
                <input class=" border-black border mx-7 "  type="date" name="posted" value={post.posted} onChange={createAPost} placeholder="date" />
                <br/>
                <input class=" border-black border mx-7 my-3"   type='url' name='url' value={post.url}  onChange={createAPost} placeholder="url link"/>
                <br/>
                <input class=" border-black border mx-7 "  type="text" name="note" value={post.note} onChange={createAPost} placeholder="notes" />
                <br/>
                <button class="rounded-lg bg-slate-500 text-lg mt-5 px-2 py-2 font-laonoto tracking-wider  hover:bg-indigo-500 outline-none mx-10"  type="submit"> Create Posting </button>
        </form>
      </div>
    )
}