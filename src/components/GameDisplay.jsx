
export default function GameDisplay({ idState, setIdState, gameData, filteredIDs, filterState }) {

    

    const displayedGame = gameData.filter(game => game.id === idState)



    const gameYear = idState === null? "idState is null" : displayedGame[0].release_date.split("-")[0]



    const getRandomGame = () => {
        const randomIndex = Math.floor((Math.random() * filteredIDs.length))
        const randomID = filteredIDs[randomIndex]
        setIdState(randomID)
    }


    
    const gameDisplayTheme = () => {
        if(localStorage.theme === "dark"){
            return "game-display-dark"
        } else {
            return "game-display"
        }
    }


    
    if(idState === null){
        return
    } else {
        return (
            <div id={gameDisplayTheme()} 
            className="fixed col-start-2 row-start-1 row-span-2 flex flex-col text-center 
            w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center 
            overflow-auto pt-16 bg-FGI_white lg:relative lg:left-0 lg:top-0 z-50
            lg:translate-x-0 lg:translate-y-0 lg:w-[95%] lg:h-[95%] lg:justify-self-center 
            lg:self-center lg:rounded-md dark:bg-FGI_dark_blue dark:border-0 lg:dark:border 
            dark:text-FGI_blue dark:border-FGI_blue">
                {/* exit button */}
                <p onClick={() => setIdState(null)} 
                className="cursor-pointer absolute right-4 top-4 text-3xl font-bold 
                text-FGI_dark_blue px-2 hover:rounded-xl hover:bg-FGI_blue dark:hover:bg-FGI_blue 
                dark:hover:text-FGI_dark_blue dark:text-FGI_blue">
                    X
                </p>
                {/* title */}
                <h1 
                className="text-2xl pt-4 font-bold text-FGI_dark_blue md:text-4xl 
                lg:font-extrabold w-11/12 dark:text-FGI_blue">
                    {displayedGame[0].title} ({gameYear})
                </h1>
                {/* game link/img */}
                <a target="_blank" rel="noreferrer" href={displayedGame[0].game_url} 
                className="w-11/12 text-center rounded-xl my-10 lg:relative border-2 border-FGI_dark_blue 
                dark:border-FGI_blue">
                    <div 
                    className="bg-FGI_blue text-FGI_dark_blue rounded-t-xl font-semibold lg:absolute 
                    lg:text-7xl lg:bg-[rgba(0,0,0,0)] lg:hover:text-FGI_blue lg:hover:bg-[rgba(0,0,0,.5)] 
                    lg:w-full lg:h-full lg:rounded-xl lg:font-black lg:pt-1/2 lg:tracking-widest 
                    lg:text-[rgba(0,0,0,0)] transition">
                        <p 
                        className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 
                        lg:-translate-x-1/2 lg:w-3/4 lg:animate-pulse">
                            Play Now
                        </p>
                    </div>
                    <img src={displayedGame[0].thumbnail} alt="game thumbnail" 
                    className="rounded-b-xl w-full lg:rounded-xl"/>
                </a> 
                {/* game info */}
                <p 
                className="w-11/12 font-semibold text-lg text-start md:text-3xl lg:text-2xl">
                    {displayedGame[0].short_description}
                </p>
                <p 
                className="text-FGI_dark_blue text-start w-11/12 
                pt-4 font-semibold dark:text-FGI_blue">
                    Published By: {displayedGame[0].publisher}
                </p>
                <p 
                className="text-FGI_dark_blue dark:text-FGI_blue text-start w-11/12 
                font-semibold">
                    Developed By: {displayedGame[0].developer}
                </p>
                {/* random button */}
                <button onClick={getRandomGame} 
                className="w-4/6 lg:w-11/12  rounded-lg border-2 text-xl font-black p-2 mt-14 
                mb-4 bg-FGI_blue active:bg-FGI_dark_blue text-FGI_dark_blue hover:text-black 
                dark:hover:text-FGI_white active:text-FGI_blue md:p-2 md:text-3xl">
                    random game
                </button>
                <div className="grid grid-rows-[auto_fit-content_fit-content] w-4/6 mb-10 md:mb-14">
                    <h2 className="col-start-1 col-span-4 border-b border-b-FGI_dark_blue 
                    dark:border-b-FGI_blue text-lg font-bold mb-2 md:text-2xl">
                        Parameters
                    </h2>
                    <p className="col-start-1 col-span-2 font-semibold md:text-xl">
                        Tag
                    </p>
                    <p className="col-start-3 col-span-2 font-semibold md:text-xl">
                        Platform
                    </p>
                    <p className="col-start-1 col-span-2 md:text-lg">
                        {filterState.tag}
                    </p>
                    <p className="col-start-3 col-span-2 md:text-lg">
                        {filterState.platform}
                    </p>
                </div>
                
            </div>
        )
    }
    
}
