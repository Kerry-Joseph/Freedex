const Index = ({ setIdState, gameData, filterState}) => {

    const loading = () => {
        return <h1>loading...</h1>
    }


    const loaded = () => {

        const index = gameData.filter(game => {
            // all filters active
            if(game.genre === filterState.tag && game.platform.includes(filterState.platform) 
                && game.title.includes(filterState.search)){
                    return game
            // two filters active
            } else if (game.genre === filterState.tag && game.platform.includes(filterState.platform) 
                && filterState.search === ""){
                    return game
            } else if (game.genre === filterState.tag && game.title.includes(filterState.search) 
                && filterState.platform === "None"){
                    return game
            } else if (game.genre === game.platform.includes(filterState.platform) 
                && game.title.includes(filterState.search) && filterState.tag === "None"){
                    return game
            // one filter active
            } else if (game.genre === filterState.tag && filterState.tag === "None" 
                && filterState.search === ""){
                    return game
            } else if (game.platform.includes(filterState.platform) && filterState.tag === "None" 
                && filterState.search === ""){
                    return game
            } else if (game.title.includes(filterState.search) && filterState.tag === "None" 
                && filterState.platform === "None"){
                    return game
            // none
            } else if (filterState.tag === "None" && filterState.platform === "None" 
                && filterState.search === ""){
                    return game
            }
        })


        return index.map((game) => (
            <div onClick={() => setIdState(game.id)} key={game.id} 
            className="border-b border-black flex flex-row items-center">
                <img src={game.thumbnail} alt="game thumbnail" className="h-16" />
                <div>
                    <h1>{game.title}</h1>
                    <p>{game.short_description}</p>
                </div>
            </div>
        ))
    }


    return(
        <div className="col-start-1 overflow-auto h-full w-full">
            {gameData ? loaded() : loading()}
        </div>
    ) 
}

export default Index