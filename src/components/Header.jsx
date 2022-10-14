const Header = ({ filterState, setFilterState, showSortOption }) => {
    
    // tag list dropdown
    const tagList = document.querySelector("#tag-list")
    const showTags = () => {
        if(tagList.style.display === "none"){
            tagList.style.display = "block"
        } else {
            tagList.style.display = "none"
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



    // tag list dropdown
    const platformList = document.querySelector("#platform-list")
    const showPlatforms = () => {
        if(platformList.style.display === "none"){
            platformList.style.display = "block"
        } else {
            platformList.style.display = "none"
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
    const showSorts = () => {
        if(sortList.style.display === "none"){
            sortList.style.display = "block"
        } else {
            sortList.style.display = "none"
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
        className="top-0 left-0 bg-FGI_dark_blue grid grid-cols-[1fr_10rem_10rem_12rem] h-16 items-center
        text-FGI_blue font-bold">
            <h1>Freedex</h1>
            {/* sort */}
            <div
            className="relative">
                <h1 onClick={() => showSorts()}
                className="relative">
                    Sort: 
                    <span
                    className="absolute right-[4.2rem] translate-x-1/2 w-max">
                        {showSortOption()}
                    </span>
                </h1>
                <ul style={{display: "none"}} id="sort-list"
                className="absolute top-10 right-30 text-FGI_dark_blue rounded-xl bg-FGI_white border">
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
                className="relative">
                    Tag: 
                    <span 
                    className="absolute right-[4.5rem] translate-x-1/2 w-max">
                        {filterState.tag}
                    </span>
                </h1>
                <ul style={{display: "none"}} id="tag-list" onClick={handleTagClick}
                className="absolute top-20 text-FGI_dark_blue rounded-xl bg-FGI_white border">
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
                className="relative">
                    Platform: 
                    <span 
                    className="absolute right-[5.2rem] translate-x-1/2">
                        {filterState.platform}
                    </span>
                </h1>
                <ul style={{display: "none"}} id="platform-list" onClick={handlePlatformClick}
                className="absolute top-0 text-FGI_dark_blue rounded-xl bg-FGI_white border">
                    <li>None</li>
                    <li>PC</li>
                    <li>Browser</li> 
                </ul>
            </div>
            {/* searchbar */}
            <form 
            className="col-span-4">
                <input type="text" placeholder="search..." value={filterState.search} onChange={handleChange} 
                className="w-screen"/>
            </form>
        </div>
    )
}

export default Header