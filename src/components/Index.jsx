const Index = ({ setIdState, gameData, filterState }) => {

    const loading = () => {
        return <h1>loading...</h1>
    }


    const loaded = () => {

        const index = gameData.filter(game => {
            if(game.genre === filterState.tag){
                return game
            } else if (filterState.tag === "Tag"){
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