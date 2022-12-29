import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import PostingCreate from "./PostingCreate";
import PostingUpdate from "./PostingUpdate";
import PostingDetails from "./PostingDetails";

function MainHub(){
    const [loading, setLoading] = useState(false);
    const [posting, setPosting] = useState([]);

    const getPostings = {
        method: "GET",
        url: "https://sports-discord.fly.dev/api/topics",
      };
      useEffect(() => {
        axios
          .request(getPostings)
          .then(function (response) {
            setPosting(response.data);
            setLoading(true);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, [posting]);


    return(
        <div>
            <Nav></Nav>
            <h1>MainHub</h1>
            <Routes>
            <Route path="/mainhub" element={<Home topics={topics} setTopics={setTopics} />}/>
            <Route path="/mainhub/:postingID" element={<PostingDetails posting={posting} />}/>
            <button><PostingCreate/></button>
            <button><PostingUpdate/></button>
            <button><PostingUpdate/></button>
            </Routes>


        </div>
    )
}
export default MainHub;