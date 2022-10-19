import { useState, useEffect } from "react"
import ThemeIcon from "./small-comps/ThemeIcon"

export default function Header({ filterState, setFilterState, showSortOption }) {

    // state
    const [filtersOpen, setFiltersOpen] = useState('start up')
    const [modeSwitch, setModeSwitch] = useState(true)
    const [themeAnimation, setThemeAnimation] = useState("")


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
        localStorage.url = "https://free-to-play-games-database.p.rapidapi.com/api/games"
        window.location.reload()
    }
    const releaseDatetSortUrlCookie = () => {
        localStorage.url = "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date"
        window.location.reload()
    }
    const popularitySortUrlCookie = () => {
        localStorage.url = "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity"
        window.location.reload()
    }
    const alphabeticalSortUrlCookie = () => {
        localStorage.url = "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical"
        window.location.reload()
    }
    const relevanceSortUrlCookie = () => {
        localStorage.url = "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance"
        window.location.reload()
    }
    


    // open filters function
    const handleClickOpenFilters = () => {
        if(filtersOpen === "start up" || filtersOpen === false){
            setFiltersOpen(true)
        } else {
            setFiltersOpen(false)
            tagList.style.display = "none"
            tagSelection.style.borderBottom = "solid 0 #44ccff"
            platformList.style.display = "none"
            platformSelection.style.borderBottom = "solid 0 #44ccff"
            sortList.style.display = "none"
            sortSelection.style.borderBottom = "solid 0 #44ccff"
        }
    }

    

    // filter text class based off of filtersOpen state
    useEffect(() => {
        const filterTextElement = document.querySelector("#filter-text")
        const freedexTitle = document.querySelector('#freedex-title')
        if(filtersOpen === 'start up'){
            filterTextElement.className = 
                "absolute top-2 right-0 pr-[1.5rem] h-10 w-screen bg-FGI_dark_blue z-30 cursor-pointer flex items-end justify-end font-black text-xl"
        } else if(filtersOpen){
            filterTextElement.className = 
                "absolute -top-10 right-0 pr-[1.5rem] md:top-2 md:right-[31.5rem] h-10 w-screen bg-FGI_dark_blue z-30 cursor-pointer flex items-end justify-end font-black text-xl animate-open_filters_mobile md:animate-open_filters"
            freedexTitle.className = 
                "absolute -top-10 md:top-0 left-0 w-full flex h-[2.9rem] text-4xl items-end md:relative pl-5 font-black z-40 pointer-events-none animate-open_filters_mobile md:animate-none"
        } else {
            filterTextElement.className = 
                "absolute top-2 right-[1.5rem] h-10 w-screen bg-FGI_dark_blue z-30 cursor-pointer flex items-end justify-end font-black text-xl md:animate-close_filters"
        }
    }, [filtersOpen])

    

    // theme
    const changeTheme = () => {
        if(localStorage.theme === "dark"){
            localStorage.theme = "light"
            setThemeAnimation('animate-light_theme')
            setModeSwitch('float-left') 
        } else {
            localStorage.theme = "dark"
            setThemeAnimation('animate-dark_theme')
            setModeSwitch('float-right') 
        }
    }

    useEffect(() => {
        if(localStorage.theme === "dark"){
            setModeSwitch('float-right')
        }
    }, [])

    

    return (
        <div
        className={`top-0 left-0 bg-FGI_dark_blue grid grid-cols-6 relative 
        md:grid-cols-[1fr_1fr_1fr_minmax(8rem,10rem)_minmax(8rem,10rem)_minmax(8rem,10rem)]
        grid-rows-[2.5rem_auto] h-24 pt-2 items-center text-FGI_blue font-bold`}>
            <h1 id="freedex-title"
            className="absolute top-0 left-0 w-full flex h-[2.9rem] text-4xl items-end md:relative pl-5 
            font-black z-40 pointer-events-none">
                Freedex
            </h1>
            <h2 onClick={() => handleClickOpenFilters()} id="filter-text">
                filters:
            </h2>
            {/* sort */}
            <div id="sort-filter"
            className="relative col-start-1 col-span-2 md:col-start-4 md:col-span-1">
                <div onClick={() => showSorts()}
                className="relative border-r h-6 cursor-pointer">
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
                className="absolute top-10 w-full text-FGI_dark_blue rounded-b-xl bg-FGI_white 
                border-b border-x py-1 px-2">
                    <li onClick={() => noSortUrlCookie()}>None</li>
                    <li onClick={() => releaseDatetSortUrlCookie()}>Release Date</li>
                    <li onClick={() => popularitySortUrlCookie()}>Popularity</li>
                    <li onClick={() => alphabeticalSortUrlCookie()}>Alphabetical</li> 
                    <li onClick={() => relevanceSortUrlCookie()}>Relevance</li> 
                </ul>
            </div>
            {/* tag */}
            <div id="tag-filter"
            className="relative col-start-3 col-span-2 md:col-start-5 md:col-span-1">
                <h1 onClick={() => showTags()} 
                className="relative border-r h-6 cursor-pointer">
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
                className="absolute hidden top-10 text-FGI_dark_blue rounded-b-xl bg-FGI_white w-full 
                border-b border-x py-1 px-2">
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
            <div id="platform-filter"
            className="relative col-start-5 col-span-2 md:col-start-6 md:col-span-1">
                <h1 onClick={() => showPlatforms()}
                className="relative h-6 cursor-pointer">
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
                className="hidden absolute top-10 w-full text-FGI_dark_blue rounded-b-xl bg-FGI_white 
                border-b border-x py-1 px-2">
                    <li>None</li>
                    <li>PC</li>
                    <li>Browser</li> 
                </ul>
            </div>
            {/* searchbar */}
            <form 
            className="col-span-4 md:col-span-6 pl-4 pr-0 md:pl-4 md:pr-28 ">
                <input type="text" placeholder="Search Freedex..." value={filterState.search} onChange={handleChange} 
                className="w-full rounded-md h-8 px-3 bg-FGI_white text-FGI_dark_blue focus:outline-none 
                dark:placeholder:text-FGI_blue dark:bg-FGI_dark_blue dark:border-FGI_blue dark:border-2 dark:text-FGI_blue 
                focus:border-FGI_blue focus:border-2"/>
            </form>
            <div onClick={changeTheme}
            className="bg-FGI_white col-span-2 w-[4rem] bg-FGI_white dark:bg-FGI_dark_blue md:absolute md:right-6 
            md:bottom-2 md:h-8 justify-self-center border-2 h-4/6 cursor-pointer rounded-2xl">
                <div id="mode-ball"
                className={`${modeSwitch} ${themeAnimation} relative w-1/2 h-full bg-FGI_dark_blue border rounded-2xl`}>
                    <ThemeIcon modeSwitch={modeSwitch}/>
                </div>
            </div>
        </div>
    )
}
