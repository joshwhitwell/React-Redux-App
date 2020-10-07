//Dependencies
import axios from 'axios'

//Export Action Types
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'

//Action Creator
//Called Inside of App
//Receives URL from App State
//Returns Thunk with Access to Dispatch through Middleware
export const fetchPokemon = (url) => (dispatch) => {
    //First dispatch triggers loading state 
    dispatch({ type: FETCH_POKEMON_START })
    axios.get(url)
        .then((res) => {
            //Second dispatch turns off loading state and sets data to store
            dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            //Third dispatch triggers if axios calls fails and returns error as payload
            dispatch({ type: FETCH_POKEMON_FAILURE, payload: err})
        })
}
