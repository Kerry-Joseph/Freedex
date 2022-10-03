const GameDisplay = ({ idState, gameData }) => {


    const loading = () => {
        return <h1>loading...</h1>
    }


    const loaded = () => {

        const game = gameData.filter(game => game.id === idState)

        if(idState === null){
            return
        } else {
            return <h1>{game[0].title}</h1>
        }
    }


    return (
        <div className="fixed border border-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {gameData ? loaded() : loading()}
        </div>
    ) 
    
}

export default GameDisplay