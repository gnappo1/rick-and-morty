import {useState, useEffect} from 'react'
import { CharactersFilter } from '../components/characters/CharactersFilter'
import { CharactersList } from '../components/characters/CharactersList'

export const CharactersContainer = () => {
    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState(characters)

    const fetchData = async () => {
        try {
            const resp = await fetch("http://localhost:3001/characters")
            const data = await resp.json()
            setCharacters(data)
            setFilteredCharacters(data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
       fetchData()
    }, [])

    const handleSearch = (searchValue) => {
        const filteredCharacters = characters.filter(character => character.name.toLowerCase().startsWith(searchValue.toLowerCase()))
        
        setFilteredCharacters(filteredCharacters)
    }

    return (
        <div>
            <CharactersFilter handleSearch={handleSearch} />
            <CharactersList characters={filteredCharacters} />
        </div>
    )
}

