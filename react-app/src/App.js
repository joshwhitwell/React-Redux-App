//React Dependencies
import React, { useEffect, useState } from 'react'
//Redux Dependencies
import { connect } from 'react-redux'

//Actions
import { fetchPokemon } from './store/actions'

//Styles
import './App.css'

//Components
import SearchForm from './components/SearchForm'

//App Component
function App(props) {
  //deconstruct fetchPokemon from props
  const { fetchPokemon } = props
  //initialize local state for API URL
  const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon/')

  //use effect calls fetchPokemon action
  useEffect(() => {
    fetchPokemon(url)
  }, [fetchPokemon, url])

  return (
    <div className='App'>
      <header>
        <h1>Pokemon App</h1>
      </header>
      <SearchForm setURL={setURL}/>
    </div>
  )
}

//Map State from Global Redux Store and Set as Props
//State Is Passed in from Connect On Invocation
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon
  }
}

//Export SearchForm & Connect to Global Redux Flow
//Second Argument Is For Needed Actions
export default connect(mapStateToProps, { fetchPokemon })(App)
