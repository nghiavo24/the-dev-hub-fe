import React from 'react'

const ApplicationUpdate = () => {
  
  
    return (
    <div>
        <div>Update an Application</div>
        <form onSubmit={createNewApp}>
        <input placeholder='Job title' name='title' value={newApp.title} onChange={handleAppCreate} required />
        <input placeholder='Company' name='company' value={newApp.company} onChange={handleAppCreate} required />
        <input placeholder='Date applied' name='applied' value={newApp.applied} onChange={handleAppCreate} />
        <input placeholder='Name of recruiter/hiring manager' name='hiring_manager' value={newApp.hiring_manager} onChange={handleAppCreate} required />
        <input placeholder='Compensation' name='compensation' value={newApp.compensation} onChange={handleAppCreate} />
        <input placeholder='Remote/In-person/Hybrid' name='work_site' value={newApp.work_site} onChange={handleAppCreate}  />
        <input placeholder='Job location' name='location' value={newApp.location} onChange={handleAppCreate} />
        <input placeholder='Job URL' name='url' value={newApp.url} onChange={handleAppCreate} />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default ApplicationUpdate