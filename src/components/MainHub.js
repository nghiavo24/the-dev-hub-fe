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
          <div class="px-9 py-7 border mx-5 my-5 border-blond bg-white shadow-lg rounded-lg">
                 <h3 class="text-2xl flex flex-wrap  text-dark-salmon" >{post.company}</h3>
                <h3 class="flex flex-wrap" >{post.title}</h3>
 
                <h3 class="flex flex-wrap py-3" >{post.posted}</h3>
              <button class="rounded-lg bg-slate-500 text-lg px-4 py-2 font-laonoto tracking-wider bg-air-blue text-white outline-none"><Link to= {`/mainhub/posting/${post._id}`}  > View Details </Link> </button>
          </div>
        );
      });



    return(
        <div >
            <div class="p-4">
                <h1 className='text-4xl text-center mx-44' >MainHub</h1>
            </div>

            <Link to= '/mainhub/posting/add'>
                <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" > 
                    <div class="absolute inset-0 w-3 bg-paolo-green transition-all duration-[800ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Create a Post</span>
                </button> 
            </Link>


            <div class="flex flex-wrap">{allPosting}</div>

            <div class="p-4">
            </div>

        <div>


        </div>


        </div>
    )
}

export default MainHub;