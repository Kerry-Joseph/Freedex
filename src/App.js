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
  


  // recieve data
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const getGameData = async() => {
    try {
      const res = await fetch(!localStorage.url ? process.env.REACT_APP_NO_SORT_URL : localStorage.url, options)
      const data = await res.json()
      setGameData(data)
    } catch(err) {
      console.log("failed to fetch")
    }
  }

  useEffect(() => {
    getGameData()
  })



  // sort filter text is based off of fetched url
  const showSortOption = () => {
    if(localStorage.url === process.env.REACT_APP_NO_SORT_URL){
      return 'None'
    } else if(localStorage.url === process.env.REACT_APP_RELEASE_DATE_URL){
      return 'Release Date'
    } else if(localStorage.url === process.env.REACT_APP_POPULARITY_URL){
      return 'Popularity'
    } else if(localStorage.url === process.env.REACT_APP_ALPHABETICAL_URL){
      return 'Alphabetical'
    } else if(localStorage.url === process.env.REACT_APP_RELEVANCE_URL){
      return 'Relevance'
    }
  }


  
  const dataLoading = () => {
    return (
      <div
      className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20'>
        <div
        className=' w-full h-full bg-FGI_blue rounded-[20rem] animate-spin'>
          <div
          className='absolute left-1/2 top-1/2 w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2 bg-FGI_dark_blue rounded-[20rem]'>
            <div
            className='absolute left-1/2 top-1/2 w-3 h-16 -translate-x-1/2 -translate-y-1/2 bg-FGI_blue rotate-45'>
              <div
              className='absolute left-1/2 top-1/2 w-3 h-16 -translate-x-1/2 -translate-y-1/2 bg-FGI_blue rotate-90'>
                <div
                className='absolute w-10 h-10 bg-FGI_blue rounded-[20rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div
                  className='absolute w-16 h-8 bg-FGI_blue left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
