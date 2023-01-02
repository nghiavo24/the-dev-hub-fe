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
               <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" > <Link to= '/mainhub/posting/add'>Create a Post</Link> </button>
            </div>
        </div>
    )
}

export default MainHub;