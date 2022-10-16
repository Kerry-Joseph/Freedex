const Header = ({ filterState, setFilterState, showSortOption }) => {
    
    // tag list dropdown
    const tagList = document.querySelector("#tag-list")
    const tagSelection = document.querySelector("#tag-selection")
    const showTags = () => {
        if(tagList.style.display === "none"){
            tagList.style.display = "block"
            tagSelection.style.borderBottom = "solid .18rem #44ccff" 
        } else {
            tagList.style.display = "none"
            tagSelection.style.borderBottom = "solid 0 #44ccff"
        }
    }

    const handleTagClick = e => {
        if(e.target.innerHTML.length < 20){
            setFilterState(prev => { 
                return {
                    ...prev, tag : e.target.innerHTML
                }
            })
        } else {
            return
        }
    }



    // platform list dropdown
    const platformList = document.querySelector("#platform-list")
    const platformSelection = document.querySelector("#platform-selection")
    const showPlatforms = () => {
        if(platformList.style.display === "none"){
            platformList.style.display = "block"
            platformSelection.style.borderBottom = "solid .18rem #44ccff" 
        } else {
            platformList.style.display = "none"
            platformSelection.style.borderBottom = "solid 0 #44ccff"
        }
    }

    const handlePlatformClick = e => {
        if(e.target.innerHTML.length < 10) {
            setFilterState(prev => { 
                return {
                    ...prev, platform : e.target.innerHTML
                }
            })
        } else {
            return
        }
    }



    // sort list dropdown
    const sortList = document.querySelector("#sort-list")
    const sortSelection = document.querySelector("#sort-selection")
    const showSorts = () => {
        if(sortList.style.display === "none"){
            sortList.style.display = "block"
            sortSelection.style.borderBottom = "solid .18rem #44ccff" 
        } else {
            sortList.style.display = "none"
            sortSelection.style.borderBottom = "solid 0 #44ccff"
        }
    }



    // filter search bar handleChange
    const handleChange = e => {
        setFilterState(prev => {
            return {
                ...prev, search: e.target.value
            }
        })
    }

    
    
    // sort url cookie functions 
    const noSortUrlCookie = () => {
        document.cookie = "url=https://free-to-play-games-database.p.rapidapi.com/api/games;path=/"
        window.location.reload()
    }
    const releaseDatetSortUrlCookie = () => {
        document.cookie = "url=https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date;path=/"
        window.location.reload()
    }
    const popularitySortUrlCookie = () => {
        document.cookie = "url=https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity;path=/"
        window.location.reload()
    }
    const alphabeticalSortUrlCookie = () => {
        document.cookie = "url=https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical;path=/"
        window.location.reload()
    }
    const relevanceSortUrlCookie = () => {
        document.cookie = "url=https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance;path=/"
        window.location.reload()
    }

    
    return (
        <div
        className="top-0 left-0 bg-FGI_dark_blue grid grid-cols-3 
        md:grid-cols-[1fr_minmax(8rem,10rem)_minmax(8rem,10rem)_minmax(8rem,10rem)_minmax(8rem,10rem)] 
        grid-rows-[2.5rem_auto] h-24 pt-2 items-center text-FGI_blue font-bold">
            <h1 className="hidden md:block pl-5 font-black text-3xl">
                Freedex
            </h1>
            <h2 className="hidden md:block justify-self-end self-end pr-7 pb-1 font-black text-xl">
                filters:
            </h2>
            {/* sort */}
            <div
            className="relative">
                <div onClick={() => showSorts()}
                className="relative border-r h-6">
                    <span
                    className="absolute -top-1.5 left-0.5 text-xs pl-1 lg:text-md">
                        Sort: 
                    </span>
                    <span id="sort-selection"
                    className="absolute -bottom-1.5 right-1/2 translate-x-1/2 w-max">
                        {showSortOption()}
                    </span>
                </div>
                <ul style={{display: "none"}} id="sort-list"
                className="absolute top-10 w-full text-FGI_dark_blue rounded-b-xl bg-FGI_white border-b border-x py-1 px-2">
                    <li onClick={() => noSortUrlCookie()}>None</li>
                    <li onClick={() => releaseDatetSortUrlCookie()}>Release Date</li>
                    <li onClick={() => popularitySortUrlCookie()}>Popularity</li>
                    <li onClick={() => alphabeticalSortUrlCookie()}>Alphabetical</li> 
                    <li onClick={() => relevanceSortUrlCookie()}>Relevance</li> 
                </ul>
            </div>
            {/* tag */}
            <div
            className="relative">
                <h1 onClick={() => showTags()} 
                className="relative border-r h-6">
                    <span
                    className="absolute -top-1.5 left-0.5 text-xs pl-1 lg:text-md">
                        Tag: 
                    </span>
                    <span id="tag-selection"
                    className="absolute -bottom-1.5 right-1/2 translate-x-1/2 w-max">
                        {filterState.tag}
                    </span>
                </h1>
                <ul id="tag-list" onClick={handleTagClick}
                className="absolute hidden top-10 text-FGI_dark_blue rounded-b-xl bg-FGI_white w-full border-b border-x py-1 px-2">
                    <li>None</li>
                    <li>MMOARPG</li>
                    <li>Shooter</li>
                    <li>Strategy</li>
                    <li>Moba</li>
                    <li>Racing</li>
                    <li>Sports</li>
                    <li>Social</li>
                    <li>Card Game</li>
                    <li>Battle Royale</li>
                    <li>MMO</li>
                    <li>MMOFPS</li>
                    <li>Fantasy</li>
                    <li>Fighting</li>
                    <li>Action RPG</li>
                    <li>ARPG</li>
                </ul>
            </div>
            {/* platform */}
            <div
            className="relative">
                <h1 onClick={() => showPlatforms()}
                className="relative h-6">
                    <span
                    className="absolute -top-1.5 left-0.5 text-xs pl-1 lg:text-md">
                        Platform: 
                    </span>
                    <span id="platform-selection"
                    className="absolute -bottom-1.5 right-1/2 translate-x-1/2">
                        {filterState.platform}
                    </span>
                </h1>
                <ul id="platform-list" onClick={handlePlatformClick}
                className="hidden absolute top-10 w-full text-FGI_dark_blue rounded-b-xl bg-FGI_white border-b border-x py-1 px-2">
                    <li>None</li>
                    <li>PC</li>
                    <li>Browser</li> 
                </ul>
            </div>
            {/* searchbar */}
            <form 
            className="col-span-5 px-3">
                <input type="text" placeholder="search..." value={filterState.search} onChange={handleChange} 
                className="w-full rounded-md h-8 px-3 bg-FGI_white text-FGI_dark_blue focus:outline-none 
                focus:border-FGI_blue focus:border-2"/>
            </form>
        </div>
    )
}

export default Header