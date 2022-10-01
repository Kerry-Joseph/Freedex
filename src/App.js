import { useEffect, useState } from 'react'; 

import Header from './components/Header';
import Index from './components/Index';
import GameDisplay from './components/GameDisplay';

function App() {

  const [indexState, setIndexState] = useState(null)
  const [idState, setIdState] = useState(null)


  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'baa97ae877mshc69a69725591f49p11b149jsn48d04de188ed',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const getGameData = async() => {
    try {
      const res = await fetch(url, options)
      const data = await res.json()
      setIndexState(data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getGameData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Index indexState = {indexState} setIdState = {setIdState}/>
      <GameDisplay idState = {idState} indexState = {indexState}/>
    </div>
  )
}

export default App;
