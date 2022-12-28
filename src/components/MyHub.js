import React from 'react'
 
const MyHub = () => {
  return (
    <div className='myhub'>
        <h1>MyHub</h1>
        <div>
            {/* link will be added here to take this to applicationcreate */}
            <button>Create a job post</button>
            {/* Link tag ends here */}
        </div>
        <div>
            {/* want to do a postings.map of some sort to be able to list out all the postings that have been created by this user. */}
        </div>
    </div>
  )
}

export default MyHub