import {useState, useEffect} from 'react'
function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    const handleGetReviews = () => {
      // Client-side request are mocked by `mocks/browser.js`.
      fetch('/assignProjects')
        .then((res) => res.json())
        .then((data)=> setData(data))
    }
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <button onClick={()=>handleGetReviews()}>No profile data</button>
  
    return (
      <div><h1>{JSON.stringify(data)}</h1>

      </div>
    )
  }
  export default Profile