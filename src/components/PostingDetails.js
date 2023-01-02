import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostingDetails() {
      
    const navigate = useNavigate();
    const { id } = useParams();
    const[postDetails, setPostDetails] = useState();
    const getPostings = () => {
        axios({
        method: 'get',
        url: `https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting/${id}`
    })
        .then(res => {
            setPostDetails(res.data)
            console.log(res)
        })
        .catch(err => console.error(err))
    }
    useEffect(() =>{
        getPostings()
      } ,[] )
console.log(getPostings)
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

    // const individualPosting = getPostings.find(({_id}) => _id === postingID)




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