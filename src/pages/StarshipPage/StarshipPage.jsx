import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
import PilotList from "../../components/PilotList/PilotList"
import './StarshipPage.css'

const StarshipPage = () => {
  const [starshipData, setStarshipData] = useState({})
  const location = useLocation()
  console.log(location.state.starship.url)

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipData(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div className="starshipdetails">
        {starshipData.name ?
        <>
          <h4>NAME: {starshipData.name}</h4>
          <h4>MODEL: {starshipData.model}</h4>
          <PilotList starship={starshipData}/>

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