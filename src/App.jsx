import { Route, Routes } from 'react-router-dom'
import './App.css';
import StartshipsList from './pages/StarshipsList/StartshipsList'
import StarshipPage from './pages/StarshipPage/StarshipPage'

function App() {
  return (
    <>
      <Routes>
        <Route 
            path='/'
            element={<StartshipsList />}
          />
          <Route 
            path='/starship'
            element={<StarshipPage />}
          />
      </Routes>
  
    </>

  )
}

export default App;
