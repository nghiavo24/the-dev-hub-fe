import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostingDetails() {
      
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
        axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/${id}`)
        .then(res => {
            setPostDetails(res.data)
            console.log(res)
        })
        .catch(err => console.error(err))
    }
    useEffect(() =>{
        getPostings()
      } ,[] )
    if(postDetails === undefined) return
    console.log(postDetails)
    
    const deletePost = () => {
        axios.delete(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/delete/${id}` )
        navigate('/mainhub')
    }

    async function updatingPost(e) {
        e.preventDefault();
        const editedPost = {
          title: postUpdate.title,
          company: postUpdate.company,
          posted: postUpdate.posted,
          url: postUpdate.url,
          note: postUpdate.note,
        };

        try{
            await axios.put(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/update/${id}`, editedPost )
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
            <h1 className='text-4xl text-center border-black border-4 mx-44'>Posting Details</h1>
            <div class="max-w-md mx-10 py-4 px-8 bg-amber-100 shadow-lg rounded-lg my-20">
            
               <p class="text-2xl">Company: <span class="text-base">{postDetails.company}</span></p> 
               <p class="text-2xl">Title: < span class="text-base">{postDetails.title}</span></p> 
               <p class="text-2xl">Posted: <span class="text-base">{postDetails.posted}</span></p> 
               <p class="text-2xl">Url: <span class="text-base"> <a href={postDetails.url} target="_blank" >Click For Url</a></span></p> 
               <p class="text-2xl">Note: <span class="text-base"> {postDetails.note}</span></p> 
            </div>
            <form class=" p-10 flex flex-col" updatingPost={updatingPost}>
            <h3 className='text-4xl text-center border-black border-4 mx-44 '> Update this Posting</h3>
                <input class=" border-black border mx-7 w-1/4 text-center"  type="text" name='title' value={postUpdate.title}  onChange={updateAPost} placeholder="add job title"/>
                <input class=" border-black border mx-7 w-1/4 text-center"   type="text" name="company" value={postUpdate.company} onChange={updateAPost} placeholder="add company name" />
                <input class=" border-black border mx-7 w-1/4 text-center"   type="date" name="posted" value={postUpdate.posted} onChange={updateAPost} placeholder="date" />
                <input class=" border-black border mx-7 w-1/4 text-center"   type='url' name='url' value={postUpdate.url}  onChange={updateAPost} placeholder="url link"/>
                <input class=" border-black border mx-7 w-1/4 text-center"   type="text" name="note" value={postUpdate.note} onChange={updateAPost} placeholder="notes" />

                <button class="rounded-lg bg-slate-500 text-lg mt-5 px-2 py-2 font-laonoto tracking-wider  hover:bg-indigo-500 outline-none mx-10" onClick={updatingPost}>Update Post</button>
                <button class="rounded-lg bg-slate-500 text-lg mt-5 px-2 py-2 font-laonoto tracking-wider  hover:bg-indigo-500 outline-none mx-10" onClick={deletePost}>Delete a Post</button>
            </form>    
        </div>
    )
}

