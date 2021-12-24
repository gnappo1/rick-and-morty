import {NavLink} from 'react-router-dom'
import './Navbar.css';

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgb(2555, 120, 44)",
    fontWeight: "bold",
    verticalAlign: "center"
} 

export const Navbar = () => {
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/characters"
            >Characters</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/characters/new"
            >New Character</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/about"
            >About</NavLink>
        </div>
    )
}
