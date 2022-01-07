// import "./Character.css"
import React from 'react'
import {Card} from '../styled-components/index'

export const CharacterCard = ({character}) => {
    return (
        <Card>
            <h3>{character.name}</h3>
            <img src={character.image} alt={`${character.name} from ${character.location.name}`} />
            <h4>From {character.location.name}</h4>
        </Card>
    )
}
