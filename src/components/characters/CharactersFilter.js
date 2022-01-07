import React from 'react'
export const CharactersFilter = ({handleSearch}) => {

    return (
        <div>
            <input type="text" placeholder="Type a character name..." onChange={e => handleSearch(e.target.value)}/>
        </div>
    )
}
