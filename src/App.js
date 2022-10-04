import { useEffect, useState } from 'react'; 

import Header from './components/Header';
import Index from './components/Index';
import GameDisplay from './components/GameDisplay';


function App() {

  const [gameData, setGameData] = useState(null)
  const [idState, setIdState] = useState(null)
  const [filterState, setFilterState] = useState({
    sort: "Sort",
    tag : "Tag",
    platform : "Platform",
    search : ""
  })
  
  const selectedSortUrl = () => {
    const splitCookieBySemi = document.cookie.split(";")
    const urlCookie = splitCookieBySemi.filter(cookie => cookie.includes("url"))[0].split("=")
    const url = urlCookie[2] ? urlCookie[1] + "=" + urlCookie[2] : urlCookie[1]
    return url
  }


  let URL = selectedSortUrl()

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'baa97ae877mshc69a69725591f49p11b149jsn48d04de188ed',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const getGameData = async() => {
    try {
      const res = await fetch(URL, options)
      const data = await res.json()
      setGameData(data)
    } catch(err) {
      console.log(err)
    }
  }



  useEffect(() => {
    getGameData()
  }, [])



  
  return (
    <div className="App">
      <Header 
        filterState = {filterState}
        setFilterState = {setFilterState} 
      />
      <Index 
        setIdState = {setIdState} 
        filterState = {filterState}
        gameData = {gameData}
      />
      <GameDisplay 
        idState = {idState}
        gameData = {gameData}
      />
    </div>
  )
}

export default App;
