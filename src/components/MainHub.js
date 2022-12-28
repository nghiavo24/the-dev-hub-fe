import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PostingCreate from "./PostingCreate";
import PostingUpdate from "./PostingUpdate";
import PostingDelete from "./PostingDelete";
import PostingDetails from "./PostingDetails";

function MainHub(){

    return(
        <div>
            <h1>MainHub</h1>
            <button><PostingCreate/></button>
            <button><PostingUpdate/></button>
            <button><PostingDetails/></button>
            <button><PostingUpdate/></button>

        </div>
    )
}
export default MainHub;