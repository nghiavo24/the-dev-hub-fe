import React, {useState} from 'react';
import axios from 'axios';

const ApplicationCreate = () => {
  return (
    <div>
        <div>Create New Application</div>
        <form>
        <input placeholder='Job title' name='title' value='' onChange='' required />
        <input placeholder='Company' name='company' value='' onChange='' required />
        <input placeholder='Date applied' name='applied' value='' onChange='' required />
        <input placeholder='Name of recruiter/hiring manager' name='hiring_manager' value='' onChange='' required />
        <input placeholder='Compensation' name='compensation' value='' onChange='' required />
        <input placeholder='Remote/In-person/Hybrid' name='work_site' value='' onChange='' required />
        <input placeholder='Job title' name='location' value='' onChange='' required />
        <input placeholder='Job title' name='url' value='' onChange='' required />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default ApplicationCreate