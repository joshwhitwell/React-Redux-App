//React Dependencies
import React from 'react'

//Styles
import './App.css'

//Components
import SearchForm from './components/SearchForm'

//App Component
function App() {
  return (
    <div className='App'>
      <header>
        <h1>Pokemon App</h1>
      </header>
      <SearchForm />
    </div>
  )
}

export default App
