const GameDisplay = ({ idState, setIdState, gameData }) => {

    const loading = () => {
        return <h1>loading...</h1>
    }


    const loaded = () => {

        const game = gameData.filter(game => game.id === idState)

        const gameYear = idState === null ? "idState is null" : game[0].release_date.split("-")[0]

        if(idState === null){
            return
        } else {
            return (
                <div 
                className="fixed col-start-2 row-start-1 row-span-2 flex flex-col text-center 
                w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center 
                justify-center overflow-auto pt-16 bg-FGI_white lg:relative lg:left-0 lg:top-0 
                lg:translate-x-0 lg:translate-y-0 lg:w-full">
                    {/* exit button */}
                    <p onClick={() => setIdState(null)} 
                    className="cursor-pointer absolute right-4 top-4 text-3xl font-bold 
                    text-FGI_dark_blue px-2 hover:rounded-xl hover:bg-FGI_blue">
                        X
                    </p>
                    {/* title */}
                    <h1 
                    className="text-2xl pt-4 font-bold text-FGI_dark_blue md:p-0 md:text-4xl 
                    lg:font-extrabold">
                        {game[0].title} ({gameYear})
                    </h1>
                    {/* game link/img */}
                    <a target="_blank" rel="noreferrer" href={game[0].game_url} 
                    className="w-11/12 text-center rounded-xl my-10 lg:relative">
                        <div 
                        className="bg-FGI_blue rounded-t-xl font-semibold lg:absolute lg:text-7xl 
                        lg:bg-[rgba(0,0,0,0)] lg:hover:text-FGI_blue lg:hover:bg-[rgba(0,0,0,.5)] 
                        lg:w-full lg:h-full lg:rounded-xl lg:font-black lg:pt-1/2 lg:tracking-widest 
                        lg:text-[rgba(0,0,0,0)] transition">
                            <p 
                            className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 
                            lg:-translate-x-1/2 lg:w-3/4 lg:animate-pulse">
                                Play Now
                            </p>
                        </div>
                        <img src={game[0].thumbnail} alt="game thumbnail" 
                        className="rounded-b-xl w-full lg:rounded-xl"/>
                    </a> 
                    {/* game info */}
                    <p 
                    className="w-11/12 font-semibold text-lg md:text-start md:text-3xl lg:text-2xl">
                        {game[0].short_description}
                    </p>
                    <p 
                    className="text-[rgba(0,0,0,0)] md:text-FGI_dark_blue text-start w-11/12 
                    pt-4 font-semibold">
                        Published By: {game[0].publisher}
                    </p>
                    <p 
                    className="text-[rgba(0,0,0,0)] md:text-FGI_dark_blue text-start w-11/12 
                    font-semibold">
                        Developed By: {game[0].developer}
                    </p>
                </div>
            )
        }
    }


    return (
        <>
            {gameData ? loaded() : loading()}
        </>
    ) 
    
}

export default GameDisplay