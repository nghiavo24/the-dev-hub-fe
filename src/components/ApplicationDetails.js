import React, { useState} from 'react'

const ApplicationDetails = () => {
const[allApplications, setAllApplications] = useState();

  const getAllApplication = () => {
    axios.get('http://localhost:8080/thedevhub/application/')
    .then((res) => { setAllApplications(res.data)})
  }

  
    return (
    <div>ApplicationDetails</div>
  )
}

export default ApplicationDetails