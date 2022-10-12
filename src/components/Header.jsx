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
        setFilterState(prev => { 
            return {
                ...prev, tag : e.target.innerHTML
            }
        })
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
        setFilterState(prev => { 
            return {
                ...prev, platform : e.target.innerHTML
            }
        })
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
        className="fixed top-0 bg-FGI_dark_blue flex h-16 w-full items-center flex-wrap justify-end
        text-FGI_blue font-bold">
            <div
            className="px-2">
                <h1 onClick={() => showSorts()}>{showSortOption()}</h1>
                <ul style={{display: "none"}} id="sort-list">
                    <li onClick={() => noSortUrlCookie()}>Sort</li>
                    <li onClick={() => releaseDatetSortUrlCookie()}>Release Date</li>
                    <li onClick={() => popularitySortUrlCookie()}>Popularity</li>
                    <li onClick={() => alphabeticalSortUrlCookie()}>Alphabetical</li> 
                    <li onClick={() => relevanceSortUrlCookie()}>Relevance</li> 
                </ul>
            </div>
            <div
            className="px-2">
                <h1 onClick={() => showTags()}>{filterState.tag}</h1>
                <ul style={{display: "none"}} id="tag-list" onClick={handleTagClick}>
                    <li>Tag</li>
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
            <div
            className="px-2 pr-4">
                <h1 onClick={() => showPlatforms()}>{filterState.platform}</h1>
                <ul style={{display: "none"}} id="platform-list" onClick={handlePlatformClick}>
                    <li>Platform</li>
                    <li>PC</li>
                    <li>Browser</li> 
                </ul>
            </div>
            <form>
                <input type="text" placeholder="search..." value={filterState.search} onChange={handleChange} 
                className="w-screen"/>
            </form>
        </div>
    )
}

export default Header