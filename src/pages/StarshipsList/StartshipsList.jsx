import { useState, useEffect } from "react"
import { getAllStartships } from "../../services/sw-api"

const StartshipsList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarchips = async () => {
      const starshipData = await getAllStartships()
      setStarships(starshipData.results)
      // console.log(starships)
    }
    fetchStarchips()
  }, [])


  return (
    <>
      <h1>Starships List</h1>
      <div>
        {starships.map(starship => 
            <h3 key={starship.name}>{starship.name}</h3>
        )}
      </div>
    </>
  )
}

export default StartshipsList