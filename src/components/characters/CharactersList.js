import {CharacterCard} from './CharacterCard'

export const CharactersList = ({characters}) => {
    const charactersCards = characters.map(character => <CharacterCard key={character.id} character={character} />)

    return (
        <div>
            <h2>Characters</h2>
            <div style={{display: "flex", flexWrap: "wrap"}}>{charactersCards}</div>
        </div>
    )
}
