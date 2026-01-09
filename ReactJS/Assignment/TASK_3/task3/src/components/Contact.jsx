import React from 'react'

const Contact = () => {
   const user = {
    name: "Arun Kumar",
    email: "arun@example.com",
    isActive: true,
  };
  return (
 <>
 <div className='text-xl mx-10 my-10'>Conditional / Optional / Nullish</div>
  <div style={{ padding: "20px", fontFamily: "Arial" }} className='mx-10 my-10 shadow-2xl w-100'>
      {user === null ? (
        <p>Loading user...</p>
      ) : (
        <>
          <h2>{user?.name ?? "Guest user"}</h2>
          <p>{user?.email ?? "No email provided"}</p>

          {user?.isActive && <p>Active user</p>}
        </>
      )}
    </div>
 </>
  )
}

export default Contact