import { useState } from "react"

const Header = () => {
     
    const [filterState, setFilterState] = useState({
        tag : "Tag",
        platform : "",
        search : ""
    })

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

    
    return (
        <div>
            <div>
                <h1 id="selected-tag" onClick={() => showTags()}>{filterState.tag}</h1>
                <ul style={{display: "none"}} id="tag-list" onClick={handleTagClick}>
                    <li>mmorpg</li>
                    <li>shooter</li>
                    <li>strategy</li>
                    <li>moba</li>
                    <li>racing</li>
                    <li>sports</li>
                    <li>social</li>
                    <li>sandbox</li>
                    <li>open-world</li>
                    <li>survival</li>
                    <li>pvp</li>
                    <li>pve</li>
                    <li>pixel</li>
                    <li>voxel</li>
                    <li>zombie</li>
                    <li>turn-based</li>
                    <li>first-person</li>
                    <li>third-person</li>
                    <li>top-down</li>
                    <li>tank</li>
                    <li>space</li>
                    <li>sailing</li>
                    <li>side-scroller</li>
                    <li>superhero</li>
                    <li>permadeath</li>
                    <li>card</li>
                    <li>battle-royale</li>
                    <li>mmo</li>
                    <li>mmofps</li>
                    <li>mmotps</li>
                    <li>3d</li>
                    <li>2d</li>
                    <li>anime</li>
                    <li>fantasy</li>
                    <li>sci-fi</li>
                    <li>fighting</li>
                    <li>action-rpg</li>
                    <li>action</li>
                    <li>military</li>
                    <li>martial-arts</li>
                    <li>flight</li>
                    <li>low-spec</li>
                    <li>tower-defense</li>
                    <li>horror</li>
                    <li>mmorts</li>
                </ul>
            </div>
        </div>
    )
}

export default Header