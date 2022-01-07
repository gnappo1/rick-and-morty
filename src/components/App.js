import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { CharacterCard } from './characters/CharacterCard';
import { CharacterForm } from './characters/CharacterForm';
import { CharactersContainer } from '../containers/CharactersContainer';
import {Navbar} from './navigation/Navbar'
import {Header} from './navigation/Header'
import {Footer} from './navigation/Footer'
import {Home} from './Home'
import {About} from './About'
import React from 'react'
import {ThemeProvider} from 'styled-components';
import {theme} from './styled-components/index'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Header slogan="Get Schwifty!" storeName="Rickn'Morty"/>
          <Switch>
            <Route path="/characters/new">
              <CharacterForm />
            </Route>

            <Route path="/characters/:id">
              <CharacterCard />
            </Route>

            <Route path="/characters">
              <CharactersContainer />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
