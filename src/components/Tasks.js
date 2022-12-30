import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';

export default function Tasks({token}) {
  const [tasks, setTasks] = useState([])
  const fetchData = async(token)=>{
    const response = await axios.get('http://localhost:8080/thedevhub/application',{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    setTasks(response.data)
    console.log(response.data);
  }
  useEffect(()=>{
   if(token){
    fetchData(token);
   }
  },[]);


  return (
    <div>{tasks.map((task,index)=>(
        <p key={index}>{task.title}</p>
    ))}</div>
  )
}