import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function MainHub(){

    return(
        <div>
            <h1>MainHub</h1>
            <Link to= "/MainHub/PostingCreate"><div>Click on this to go to Posting Create</div></Link>
            <Link to= "/MainHub/PostingDelete"><div>Click on this to go to Posting Delete</div></Link>
            <Link to= "/MainHub/PostingDetails"><div>Click on this to go to Posting Details</div></Link>
            <Link to= "/MainHub/PostingUpdate"><div>Click on this to go to Posting Update</div></Link>

            <div className="mainHub">
                <Routes>
                    {/* what path to use */}
                    <Route path="/MainHub/PostingCreate" />
                    <Route path="/MainHub/PostingDelete" />
                    <Route path="/MainHub/PostingDetails" />
                    <Route path="/MainHub/PostingUpdate" />
                </Routes>
            </div>
        </div>
    )
}