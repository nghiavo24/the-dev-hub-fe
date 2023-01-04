import React, { useEffect, useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MainHub = ({token, authorizedUser}) => {
    const navigate = useNavigate();
    const [posting, setPosting] = useState();
    const getPostings = async (token) => {
            await axios.get("http://localhost:8080/api/thedevhub/posting", {
              headers:{
                  'Authorization': `Bearer ${token}`
              }
          })
            .then((res) => {
                setPosting(res.data)
            })
      };
      useEffect(() =>{
        if(token){
          getPostings(token)
        } else {
          navigate('/')
          alert ('You need to sign in!')
        }
      } ,[] )
      if(posting === undefined) return;
      const allPosting = posting.map((post) => {
        return (
          <div class="flex-wrap: wrap;">
            <Link to= {`/mainhub/posting/${post._id}`}  >
                <h3 >{post.title}</h3>
                <h3 >{post.company}</h3>
                <h3 >{post.posted}</h3>
            </Link>
          </div>
        );
      });

    return(
        <div >
            <div class="p-4">
                <h1>MainHub</h1>
            </div>
            <div class="flex container">{allPosting}</div>
            <div class="p-4">
               <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" ><Link to= '/mainhub/posting/create'>Create a Post</Link></button>
            </div>
        </div>
    )
}

export default MainHub;