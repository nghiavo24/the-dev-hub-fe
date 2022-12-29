import React, { useEffect, useState} from 'react'
import axios, { all } from 'axios';

const ApplicationDetails = () => {
const[allApplications, setAllApplications] = useState();

  const getAllApplication = () => {
    axios.get('https://online-store.herokuapp.com/api/online-store/items/')
    .then((res) => { setAllApplications(res.data)})
  }
useEffect(() =>{
  getAllApplication();
}, [])

if (allApplications === undefined) return;

console.log(allApplications)

let applicationData = Object.values(allApplications)
const listApplications = applicationData.map((application, index) => {
  return (
    <div key={index}>{application.title}</div>
  )
})
return(
  <div>
    <button>Create new application</button>
    {listApplications}
  </div>
)


    
}

export default ApplicationDetails