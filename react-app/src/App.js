//React Dependencies
import React, { useEffect, useState } from 'react'
//Redux Dependencies
import { connect } from 'react-redux'

//Actions
import { fetchURLs } from './store/actions'

//Styles
import './App.css'

//Components
import SearchForm from './components/SearchForm'
import PokemonCard from './components/PokemonCard'

//App Component
function App(props) {
  //deconstruct fetchURLs from props
  const { fetchURLs } = props
  //initialize local state for API URL
  const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon/')

  //use effect calls fetchURLs action
  useEffect(() => {
    fetchURLs(url)
  }, [fetchURLs, url])

  return (
    <div className='App'>
      <header>
        <h1>Pokemon App</h1>
      </header>
      <SearchForm setURL={setURL} />
      <section>
        {props.isLoading ? <p>Loading</p> : props.pokemon.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
      </section>
    </div>
  )
}

//Map State from Global Redux Store and Set as Props
//State Is Passed in from Connect On Invocation
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading
  }
}

//Export SearchForm & Connect to Global Redux Flow
//Second Argument Is For Needed Actions
export default connect(mapStateToProps, { fetchURLs })(App)

