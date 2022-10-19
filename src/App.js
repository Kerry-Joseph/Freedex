import { useEffect, useState } from 'react'; 

import Header from './components/Header';
import Index from './components/Index';
import GameDisplay from './components/GameDisplay';


function App() {

  // states 
  const [gameData, setGameData] = useState(null)
  const [idState, setIdState] = useState(null) // game id for game display
  const [filterState, setFilterState] = useState({
    sort: "None",
    tag : "None",
    platform : "None",
    search : ""
  })
  


  // splits cookie string to return just the url
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



  // recieve data
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
  })



  // sort filter text is based off of fetched url
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


  
  const dataLoading = () => {
    return <p>loading...</p>
  }


  
  const dataLoaded = () => {

    // filters game data by selected filters
    const index = gameData.filter(game => {
      // all filters active
      if(game.genre === filterState.tag && game.platform.includes(filterState.platform) 
          && game.title.toLowerCase().includes(filterState.search.toLowerCase())){
              return 
      // two filters acgametive
      } else if (game.genre === filterState.tag && game.platform.includes(filterState.platform) 
          && filterState.search === ""){
              return game
      } else if (game.genre === filterState.tag && game.title.toLowerCase().includes(filterState.search.toLowerCase()) 
          && filterState.platform === "None"){
              return game
      } else if (game.genre === game.platform.includes(filterState.platform) 
          && game.title.toLowerCase().includes(filterState.search.toLowerCase()) && filterState.tag === "None"){
              return game
      // one filter active
      } else if (game.genre === filterState.tag && filterState.tag === "None" 
          && filterState.search === ""){
              return game
      } else if (game.platform.includes(filterState.platform) && filterState.tag === "None" 
          && filterState.search === ""){
              return game
      } else if (game.title.toLowerCase().includes(filterState.search.toLowerCase()) && filterState.tag === "None" 
          && filterState.platform === "None"){
              return game
      // none
      } else if (filterState.tag === "None" && filterState.platform === "None" 
          && filterState.search === ""){
              return game
      }
    })
    
    const filteredIDs = index.map(game => game.id)

    

    const changeGridLayoutIfGameDisplayIsActive = () => {
      if(idState){
        return "grid-cols-[1fr_33%]"
      } else {
        return "grid-cols-1"
      }
    }



    // sets theme based off localStorage.theme
    const themeCheck = () => {
      if(localStorage.theme === 'dark'){
        return "dark"
      } else {
        return ""
      }
    }



    return (
      <div
      className={`App ${themeCheck()} grid max-w-[1280px] w-[1280px] ${changeGridLayoutIfGameDisplayIsActive()} 
      grid-rows-[6rem_auto] h-screen overflow-x-hidden `}>
        <Header 
          filterState = {filterState}
          setFilterState = {setFilterState}
          showSortOption = {showSortOption} 
        />
        <Index 
          index = {index}
          setIdState = {setIdState} 
          filterState = {filterState}
          gameData = {gameData}
        />
        <GameDisplay 
          filterState = {filterState}
          filteredIDs = {filteredIDs}
          idState = {idState}
          setIdState = {setIdState}
          gameData = {gameData}
        />
      </div>
    )
  }


  return (
    <div id="" className="flex justify-center">
        {gameData ? dataLoaded() : dataLoading()}
    </div>
  ) 

}





export default App;
