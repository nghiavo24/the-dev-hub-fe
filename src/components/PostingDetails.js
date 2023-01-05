import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            <h1 className='text-4xl text-center mx-44 mt-4 text-dark-salmon'>Posting Details</h1>
            <div class="flex justify-center">
            <div class="max-w-md mx-10 py-8 px-16 border-gray-300 border shadow-lg shadow-air-blue rounded-lg my-20">
               <p class="text-3xl my-4 text-air-blue">Company: <span class="text-xl text-black">{postDetails.company}</span></p> 
               <p class="text-3xl  text-air-blue">Title: < span class="text-xl  text-black">{postDetails.title}</span></p> 
               <p class="text-3xl my-4 text-air-blue">Posted: <span class="text-xl  text-black">{postDetails.posted}</span></p> 
               <p class="text-3xl  text-air-blue">Note: <span class="text-xl  text-black"> {postDetails.note}</span></p>                
               <p class="text-3xl my-4 text-air-blue"> <span class="text-xl  text-black " > <a href={postDetails.url} target="_blank" class="mx-20 rounded-lg bg-slate-500 text-lg px-4 py-2 my-4 font-laonoto tracking-wider bg-air-blue text-white outline-none" ><button>View Job Posting</button></a> </span></p> 
            </div>
            </div>
            <div class="flex justify-center ">
            <form class="mx-4 my-4 px-3 flex flex-col w-2/5 shadow-lg shadow-air-blue rounded-lg border-gray-300 border" updatingPost={updatingPost}>
            <h3 className='text-3xl text-center my-4 text-dark-salmon'> Update this Posting</h3>
                <input class="my-4 mx-10" type="text" name="company" value={postUpdate.company} onChange={updateAPost} placeholder="Company Name" required/>
                <input class=" mx-10"  type="text" name='title' value={postUpdate.title}  onChange={updateAPost} placeholder="Job Title" required/>
                <input class="my-4 mx-10" type="date" name="posted" value={postUpdate.posted} onChange={updateAPost} placeholder="date" />
                <input class="mx-10"  type='url' name='url' value={postUpdate.url}  onChange={updateAPost} placeholder="URL"/>
                <input class="my-4 mx-10"  type="text" name="note" value={postUpdate.note} onChange={updateAPost} placeholder="Note/Comment" />

                <button class="rounded-lg bg-slate-500 text-lg px-4 py-2 my-4 mx-10 font-laonoto tracking-wider bg-air-blue text-white outline-none" onClick={updatingPost}>Update Post</button>
                <button class="rounded-lg bg-slate-500 text-lg px-4 py-2 my-4 mx-10 font-laonoto tracking-wider bg-air-blue text-white outline-none" onClick={deletePost}>Delete a Post</button>
            </form>   
             </div>
        </div>
    )
}

export default PostingDetails

