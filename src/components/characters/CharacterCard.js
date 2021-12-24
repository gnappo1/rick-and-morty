import "./Character.css"

export const CharacterCard = ({character}) => {
    return (
        <div className="character-card">
            <h3>{character.name}</h3>
            <img src={character.image} alt={`${character.name} from ${character.location.name}`} />
            <h4>From {character.location.name}</h4>
        </div>
    )
}
