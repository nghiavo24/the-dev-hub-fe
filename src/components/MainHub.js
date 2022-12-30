import React, { useEffect, useState }  from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import PostingCreate from "./PostingCreate";
import PostingUpdate from "./PostingUpdate";
import PostingDetails from "./PostingDetails";

function MainHub(){
    const [posting, setPosting] = useState();

    const getPostings =() => {
            axios.get("https://sports-discord.fly.dev/api/topics")
            .then((res) => {
                setPosting(res.data)
            })
      };
      useEffect(() =>{
        getPostings()

      } ,[] )
      if(posting === undefined) return;

      console.log(posting)

      const allPosting = posting.map((post) => {
        return (
          <div>
              <Link to= {`/mainhub/posting/${post._id}`} ><h3 >{post.topic}</h3></Link>
          </div>
        );
      });

    return(
        <div>
            <h1>MainHub</h1>
            <div>{allPosting}</div>
            <Link to= '/mainhub/createPosting'>Create a Post</Link>





        </div>
    )
}
export default MainHub;