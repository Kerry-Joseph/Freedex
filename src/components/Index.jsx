const Index = ({ indexState }) => {



    const loading = () => {
        return <h1>loading...</h1>
    }

    const loaded = () => {
        return indexState.map((game) => (
            <div key={game.id} className="border-b border-black flex flex-row items-center">
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
            {indexState ? loaded() : loading()}
        </>
    ) 
}

export default Index