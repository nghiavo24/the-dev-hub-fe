import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplicationDetails = () => {
  const { id } = useParams();
  const[allApps, setAllApps] = useState();

  const getAllApp = () => {
    axios.get(`url/application/${id}`)
    .then((res) => { setAllApps(res.data)})
  }
useEffect(() =>{
  getAllApp();
}, [])

if (allApps === undefined) return;

return(
  <div>
    <div>{allApps.title}
    </div>
    <div></div>
  </div>
)


    
}

export default ApplicationDetails