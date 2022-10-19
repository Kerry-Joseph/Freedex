const Index = ({ setIdState, index}) => {

    const InnerIndex = () => {
        return index.map((game) => (
            <div onClick={() => setIdState(game.id)} key={game.id} 
            className="cursor-pointer bg-FGI_white dark:bg-FGI_dark_blue dark:border dark:border-FGI_blue 
            dark:text-FGI_blue flex flex-col md:flex-row [&_h1]:hover:text-black dark:[&_h1]:hover:text-FGI_white 
            rounded-lg items-center mx-4 my-2 lg:max-h-[9.7rem]">
                
                <img src={game.thumbnail} alt="game thumbnail" 
                className="rounded-lg w-3/4 mt-3 md:mt-0 md:rounded-r-none lg:max-w-[17rem] dark:lg:max-w-[16.95rem]"/>

                <div className="w-3/4 mx-4 lg:self-stretch lg:flex lg:flex-col">
                    <h1 className="text-center font-black text-xl border-b py-2 lg:text-start lg:border-b-0 
                    lg:text-2xl lg:pb-0">
                        {game.title}
                    </h1>
                    <p className="hidden lg:block text-sm font-medium pb-2">
                        {game.developer}
                    </p>
                    <p className="index-description text-center lg:text-start font-semibold mb-4 lg:mb-0 mt-1 
                    lg:mt-0 lg:mb-2 lg:max-h-[4.5rem] overflow-x-auto">
                        {game.short_description}
                    </p>
                </div>
            </div>
        ))
    }


    return (
        <div id="index" className="col-start-1 overflow-auto h-full w-full bg-FGI_dark_blue text-FGI_dark_blue">
            <InnerIndex />
        </div>
    ) 
}

export default Index