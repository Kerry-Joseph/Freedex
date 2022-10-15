import { useEffect, useState } from 'react'; 

import Header from './components/Header';
import Index from './components/Index';
import GameDisplay from './components/GameDisplay';


function App() {

  // states ----
  const [gameData, setGameData] = useState(null)
  const [idState, setIdState] = useState(null) // game id for game display
  const [filterState, setFilterState] = useState({
    sort: "None",
    tag : "None",
    platform : "None",
    search : ""
  })
  


  const selectedSortUrl = () => {
    const cookieSplitBySemi = document.cookie.split(";")
    const urlCookie = cookieSplitBySemi.filter(cookie => cookie.includes("url"))
    if(urlCookie.length === 0){
      document.cookie = "url=https://free-to-play-games-database.p.rapidapi.com/api/games;path=/"
      const urlCookieSplitByEquals = urlCookie[0].split("=")
      const url = urlCookieSplitByEquals[2] ? urlCookieSplitByEquals[1] + "=" + urlCookieSplitByEquals[2] : urlCookieSplitByEquals[1]
      return url
    } else {
      const urlCookieSplitByEquals = urlCookie[0].split("=")
      const url = urlCookieSplitByEquals[2] ? urlCookieSplitByEquals[1] + "=" + urlCookieSplitByEquals[2] : urlCookieSplitByEquals[1]
      return url
    }
  }


  let URL = selectedSortUrl()


  const showSortOption = () => {
    if(URL === "https://free-to-play-games-database.p.rapidapi.com/api/games"){
      return 'None'
    } else if(URL === "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date"){
      return 'Release Date'
    } else if(URL === "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity"){
      return 'Popularity'
    } else if(URL === "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical"){
      return 'Alphabetical'
    } else if(URL === "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance"){
      return 'Relevance'
    }
  }

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



  const changeGridLayoutIfGameDisplayIsActive = () => {
    if(idState){
      return "grid-cols-[1fr_33%]"
    } else {
      return "grid-cols-1"
    }
  }

  
  return (
    <div className={`App grid ${changeGridLayoutIfGameDisplayIsActive()} grid-rows-[6rem_auto] h-screen overflow-x-hidden`}>
      <Header 
        filterState = {filterState}
        setFilterState = {setFilterState}
        showSortOption = {showSortOption} 
      />
      <Index 
        setIdState = {setIdState} 
        filterState = {filterState}
        gameData = {gameData}
      />
      <GameDisplay 
        idState = {idState}
        setIdState = {setIdState}
        gameData = {gameData}
      />
    </div>
  )
}

export default App;
