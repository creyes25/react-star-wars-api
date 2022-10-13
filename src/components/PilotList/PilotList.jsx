import { useState, useEffect } from "react"
import { getPilots } from "../../services/sw-api"


const PilotList = (props) => {
  const [pilots, setPilots] = useState([])
  const pilotUrls = props.starship.pilots

  useEffect(() => {
    const fetchPilots = async () => {
      const pilotData = await getPilots(pilotUrls)
      setPilots(pilotData)
    }
    fetchPilots()
  }, [pilotUrls])

  return (
    <>
      <h3>Pilots:</h3>
      {pilots.length ?
      <>
        <ul>
          {pilots.map(pilot => 
            <li key={pilot.name}>{pilot.name}</li>  
          )}
        </ul>
      </>
      :
      <p>This starship doesn't have pilots</p>
    }
    </>

  );
}

export default PilotList