import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostingDetails= () => {
      
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
            <h1 class="p-4">Posting Details</h1>
            <div class="flex content-center p-4">
                {postDetails.company}
                {postDetails.title}
                {postDetails.posted}
                {postDetails.url}
                {postDetails.note}
            </div>
            <form class="p-10" updatingPost={updatingPost}>
            <h3> Update this Posting</h3>
                <label>Title</label>
                <input type="text" name='title' value={postUpdate.title}  onChange={updateAPost} placeholder="add job title"/>
                <label>Company Name</label>
                <input type="text" name="company" value={postUpdate.company} onChange={updateAPost} placeholder="add company name" />
                <label >Date Posted</label>
                <input type="date" name="posted" value={postUpdate.posted} onChange={updateAPost} placeholder="date" />
                <label>URL</label>
                <input  type='url' name='url' value={postUpdate.url}  onChange={updateAPost} placeholder="url link"/>
                <label>Note</label>
                <input type="text" name="note" value={postUpdate.note} onChange={updateAPost} placeholder="notes" />

                <button class="p-4" onClick={updatingPost}>Update Post</button>
                <button class="p-4" onClick={deletePost}>Delete a Post</button>
            </form>    
        </div>
    )
}

export default PostingDetails