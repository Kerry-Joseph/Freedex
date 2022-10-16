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
            className="border bg-FGI_white flex flex-col md:flex-row rounded-lg items-center mx-4 my-2 
            lg:max-h-[10rem]">
                
                <img src={game.thumbnail} alt="game thumbnail" 
                className="rounded-lg w-3/4 mt-3 md:mt-0 md:rounded-r-none lg:max-w-[17rem]" />

                <div className="w-3/4 mx-4 lg:self-stretch lg:flex lg:flex-col">
                    <h1 className="text-center font-black text-xl border-b py-2 lg:text-start lg:border-b-0 
                    lg:text-2xl lg:pb-0">
                        {game.title}
                    </h1>
                    <p className="hidden lg:block text-sm font-medium pb-2">
                        {game.developer}
                    </p>
                    <p className="index-description text-center lg:text-start font-semibold mb-4 lg:mb-0 mt-1 lg:mt-0 lg:mb-2 l
                    g:max-h-[4.5rem] overflow-x-auto">
                        {game.short_description}
                    </p>
                </div>
            </div>
        ))
    }


    return(
        <div id="index" className="col-start-1 overflow-auto h-full w-full bg-FGI_dark_blue text-FGI_dark_blue">
            {gameData ? loaded() : loading()}
        </div>
    ) 
}

export default Index