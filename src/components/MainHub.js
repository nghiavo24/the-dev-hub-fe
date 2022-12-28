import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PostingCreate from "./PostingCreate";

function MainHub(){

    return(
        <div>
            <h1>MainHub</h1>
            <PostingCreate/>
        </div>
    )
}
export default MainHub;