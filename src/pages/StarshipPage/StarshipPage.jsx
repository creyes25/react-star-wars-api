import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'


const StarshipPage = () => {
  const [starshipData, setStarshipData] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipData(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div>
        {starshipData.name ?
        <>
          <h4>NAME: {starshipData.name}</h4>
          <h4>MODEL: {starshipData.model}</h4>
          <Link
            to="/"
          >
            <p>RETURN</p>
          </Link>
        </>
        :
        <>
          <p>Loading starship details...</p>
        </>
        }
      </div>

      

     </>



  );
}

export default StarshipPage;