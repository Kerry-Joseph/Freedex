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
                <div className="fixed flex flex-col text-center w-screen h-screen top-1/2 
                left-1/2 -translate-x-1/2 -translate-y-1/2 items-center bg-red-700 overflow-auto pt-16 bg-FGI_white">
                    <p onClick={() => setIdState(null)} className="cursor-pointer absolute
                    right-4 top-4 text-3xl font-bold text-FGI_dark_blue">
                        X
                    </p>
                    <h1 className="text-2xl pt-4 font-bold text-FGI_dark_blue">
                        {game[0].title} ({gameYear})
                    </h1>
                    <a target="_blank" href={game[0].game_url} className="bg-white w-11/12 text-center rounded-xl my-10">
                        <p className="bg-FGI_blue rounded-t-xl font-semibold">
                            Play Now
                        </p>
                        <img src={game[0].thumbnail} alt="game thumbnail" className="rounded-b-xl w-full"/>
                    </a>
                    <p style={{display: "none"}}>
                        {game[0].publisher}
                    </p>
                    <p style={{display: "none"}}>
                        {game[0].developer}
                    </p>
                    <p className="w-11/12 font-semibold text-lg">
                        {game[0].short_description}
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