import React, { useEffect, useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MainHub = () => {
    const navigate = useNavigate();
    const token= sessionStorage.getItem("accessToken");
    const [posting, setPosting] = useState();
    const getPostings = async () => {
            await axios.get("https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting", {
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
        <div className="container gap-4 p-5 border text-center my-5  border-air-blue bg-white shadow-lg shadow-air-blue rounded-lg">
            <div className="p-5">
                <p className="italic text-2xl  text-dark-salmon" >{post.company}</p>
                <p className="text-lg my-4" >{post.title}</p>
                <p className="" >{post.posted}</p>
                <button className=" font-lobster rounded-lg text-lg px-4 py-2 my-4 tracking-wider bg-air-blue text-white outline-none"><Link to= {`/mainhub/posting/${post._id}`}> View Details </Link> </button>
            </div>
        </div>
        );
      });

    return(
        <div >
            <div className="p-4">
                <h1 className='flex justify-center font-lora text-4xl text-center' >Main Hub</h1>
            </div>
            <div className="font-montserrat container grid grid-cols-1 gap-4 mx-auto  py-9 px-10 sm:px-20 md:px-20  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around ">{allPosting}</div>
        </div>
    )
}

export default MainHub;