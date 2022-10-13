import { useState, useEffect } from "react"
import { getAllStartships } from "../../services/sw-api"
import { Link } from "react-router-dom"

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
            >
              <h3>{starship.name}</h3>
            </Link>
          )}
        </div>
    </div>

    </>
  )
}

export default StartshipsList