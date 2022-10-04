const Index = ({ setIdState, gameData, filterState }) => {

    const loading = () => {
        return <h1>loading...</h1>
    }


    const loaded = () => {

        const index = gameData.filter(game => {
            // all
            if(game.genre === filterState.tag && game.platform.includes(filterState.platform) && game.title.includes(filterState.search)){
                return game
            // doubles
            } else if (game.genre === filterState.tag && game.platform.includes(filterState.platform) && filterState.search === ""){
                return game
            } else if (game.genre === filterState.tag && game.title.includes(filterState.search) && filterState.platform === "Platform"){
                return game
            } else if (game.genre === game.platform.includes(filterState.platform) && game.title.includes(filterState.search) && filterState.tag === "Tag"){
                return game
            // solos
            } else if (game.genre === filterState.tag && filterState.tag === "Tag" && filterState.search === ""){
                return game
            } else if (game.platform.includes(filterState.platform) && filterState.tag === "Tag" && filterState.search === ""){
                return game
            } else if (game.title.includes(filterState.search) && filterState.tag === "Tag" && filterState.platform === "Platform"){
                return game
            // none
            } else if (filterState.tag === "Tag" && filterState.platform === "Platform" && filterState.search === ""){
                return game
            }
        })

        return index.map((game) => (
            <div onClick={() => setIdState(game.id)} key={game.id} className="border-b border-black flex flex-row items-center">
                <img src={game.thumbnail} alt="game thumbnail" className="h-16" />
                <div>
                    <h1>{game.title}</h1>
                    <p>{game.short_description}</p>
                </div>
            </div>
        ))
    }


    return(
        <>
            {gameData ? loaded() : loading()}
        </>
    ) 
}

export default Index