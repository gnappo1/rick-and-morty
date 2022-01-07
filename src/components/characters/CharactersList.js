import {CharacterCard} from './CharacterCard'
import React from 'react'
import {Container} from '../styled-components/index'

export const CharactersList = ({characters}) => {
    const charactersCards = characters.map(character => <CharacterCard key={character.id} character={character} />)

    return (
        <div>
            <h2>Characters</h2>
            <Container>{charactersCards}</Container>
        </div>
    )
}