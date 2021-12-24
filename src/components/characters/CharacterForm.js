import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export const CharacterForm = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("")
    const [type, setType] = useState("")
    const [gender, setGender] = useState("")
    const [origin, setOrigin] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if ([name, status, species, type, gender, origin, location, image].some(val => val.trim() === "")) {
            alert("Please fill out all the fields, thank you!!!")
            return null
        }
        const newCharacter = {name, status, species, type, gender, origin: {name: origin}, location: {name: location}, image}

        fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
        setName("")
        setStatus("")
        setSpecies("")
        setType("")
        setGender("")
        setOrigin("")
        setLocation("")
        setImage("")
        history.push("/characters")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={e => setName(e.target.value)} type="text" name="name" id="name" value={name} required/><br /><br />
                <label htmlFor="status">Status</label>
                <input onChange={e => setStatus(e.target.value)} type="text" name="status" id="status" value={status} required/><br /><br />
                <label htmlFor="species">Species</label>
                <input onChange={e => setSpecies(e.target.value)} type="text" name="species" id="species" value={species} required/><br /><br />
                <label htmlFor="type">Type</label>
                <input onChange={e => setType(e.target.value)} type="text" name="type" id="type" value={type} required/><br /><br />
                <label htmlFor="gender">Gender</label>
                <input onChange={e => setGender(e.target.value)} type="text" name="gender" id="gender" value={gender} required/><br /><br />
                <label htmlFor="origin">Origin Name</label>
                <input onChange={e => setOrigin(e.target.value)} type="text" name="origin" id="origin" value={origin} required/><br /><br />
                <label htmlFor="location">Location</label>
                <input onChange={e => setLocation(e.target.value)} type="text" name="location" id="location" value={location} required/><br /><br />
                <label htmlFor="image">Image Url</label>
                <input onChange={e => setImage(e.target.value)} type="text" name="image" id="image" value={image} required/><br /><br />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}
