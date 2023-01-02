import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostingDetails() {
      

    const navigate = useNavigate();
    const { postingID } = useParams();
    const[postDetails, setPostDetails] = useState();
    const getPostings = () => {
        axios.get(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/${postingID}`)
        .then((res) => { setPostDetails(res.data)})
    }
    // const deletePost = () => {
    //     axios.delete('')
    //     .then((res) => (navigate('/mainhub')))
    // }
    // const updatePost = async(e) => {
    //     e.preventDefault()
    //     try{
    //         await axios.put('', postDetails )
    //         navigate('/mainhub')
    //     } catch(err){
    //         console.log(err)
    //     }
    // }

    const individualPosting = postDetails.find(({_id}) => _id === postingID)

    useEffect(() => {
        postDetails();
    }, [])



    return(
        <div>
            <div>
                {postDetails}
            </div>

                {/* <button onClick={updatePost}>Update Post</button>
                <button oncClick={deletePost}>Delete a Post</button> */}
        </div>
    )
}