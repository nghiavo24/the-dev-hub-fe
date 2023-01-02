import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostingDetails() {
      
    const navigate = useNavigate();
    const { id } = useParams();

    const[postDetails, setPostDetails] = useState();

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
        .then((res) => (navigate('/mainhub')))
    }

    const updatePost = async(e) => {
        e.preventDefault()
        try{
            await axios.put(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/update/${id}`, postDetails )
            navigate('/mainhub')
        } catch(err){
            console.log(err)
        }
    }

    // const individualPosting = getPostings.find(({_id}) => _id === {id})




    return(     
        <div>
            <div>
                {postDetails.company}
            </div>

                {/* <button onClick={updatePost}>Update Post</button> */}
                <button onClick={deletePost}>Delete a Post</button>
        </div>
    )
}