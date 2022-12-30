import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// can imiport things later like favicons and pictures when page is laid out better

// Here we will need to add use state to create the form for users to submit a new application on their myHub
// Need a handlesubmit



const ApplicationCreate = () => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [applied, setApplied] = useState('')
    const [hiringManager, setHiringManager] = useState('')
    const [compensation, setCompensation] = useState('')
    const [workSite, setWorkSite] = useState('')
    const [location, setLocation] = useState('')
    const [ url, setUrl] = useState('')

  return (
    <div>ApplicationCreate
        <div>
            <form></form>
        </div>
    </div>
  )
}

export default ApplicationCreate