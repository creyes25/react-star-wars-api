import { useState, useEffect } from "react"
import { getAllStartships } from "../../services/sw-api"
import { Link } from "react-router-dom"
import './StarshipsList.css'
const StartshipsList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarchips = async () => {
      const starshipData = await getAllStartships()
      setStarships(starshipData.results)
    }
    fetchStarchips()
  }, [])


  return (
    <>
      <div>
        <h1>Starships List</h1>
        <div className="ship-container">
          {starships.map(starship => 
            <Link 
              key={starship.name}
              to='/starship'
              state= {{starship}}
              className='starshipList'
            >
              <li>{starship.name}</li>
            </Link>
          )}
        </div>
      </div>

    </>
  )
}

export default StartshipsList