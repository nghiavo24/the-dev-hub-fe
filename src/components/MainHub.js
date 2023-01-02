import React, { useEffect, useState }  from "react";
import { Link} from "react-router-dom";
import axios from "axios";

function MainHub(){
    const [posting, setPosting] = useState();

    const getPostings =() => {
            axios.get("https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting")
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
          <div >
            <Link to= {`/mainhub/postingDetails/${post._id}`} >
                <h3 >{post.title}</h3>
                <h3 >{post.company}</h3>
                <h3 >{post.posted}</h3>
            </Link>
          </div>
        );
      });

    return(
        <div >
            <h1>MainHub</h1>
            <div>{allPosting}</div>
            <Link to= '/mainhub/posting/add'>Create a Post</Link>
        </div>
    )
}
export default MainHub;