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
        <div class="container gap-4 p-5 border text-center my-5  border-air-blue bg-white shadow-lg shadow-air-blue rounded-lg">
            <div class="p-5">
                <p class="text-2xl  text-dark-salmon" >{post.company}</p>
                <p class="text-lg my-4" >{post.title}</p>
                <p class="" >{post.posted}</p>
                <button class="rounded-lg bg-slate-500 text-lg px-4 py-2 my-4 font-laonoto tracking-wider bg-air-blue text-white outline-none"><Link to= {`/mainhub/posting/${post._id}`}  > View Details </Link> </button>
            </div>
        </div>
        );
      });



    return(
        <div >
            <div class="p-4">
                <h1 className='text-4xl text-center mx-44' >Main Hub</h1>
            </div>

            <Link to= '/mainhub/posting/create'>
                <button class="group relative mx-14 h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" > 
                    <div class="absolute inset-0 w-3 bg-paolo-green transition-all duration-[800ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Create a Post</span>
                </button> 
            </Link>


            <div class="container grid grid-cols-1 gap-4 mx-auto py-9 md:grid-cols-2 lg:grid-cols-4 justify-around ">{allPosting}</div>


        </div>
    )
}

export default MainHub;