const Header = ({ filterState, setFilterState }) => {
    
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


    
    return (
        <div>
            <div>
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
            <div>
                <h1 onClick={() => showPlatforms()}>{filterState.platform}</h1>
                <ul style={{display: "none"}} id="platform-list" onClick={handlePlatformClick}>
                    <li>Platform</li>
                    <li>PC</li>
                    <li>Browser</li> 
                </ul>
            </div>
        </div>
    )
}

export default Header