//Dependencies
import axios from 'axios'

//Export Action Types
export const FETCH_URLS_START = 'FETCH_URLS_START'
export const FETCH_URLS_SUCCESS = 'FETCH_URLS_SUCCESS'
export const FETCH_URLS_FAILURE = 'FETCH_URLS_FAILURE'

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'

//Action Creator
//Called Inside of App
//Receives URL from App State
//Returns Thunk with Access to Dispatch through Middleware
export const fetchURLs = (url) => (dispatch) => {
    //First dispatch triggers loading state
    dispatch({ type: FETCH_URLS_START })
        axios.get(url)
        .then((res) => {
            console.log('fetchURLs axios call')
            dispatch({ type: FETCH_URLS_SUCCESS, payload: res.data.results })
        })
        .catch((err) => {
            console.log(err)
            //Third dispatch triggers if axios calls fails and returns error as payload
            dispatch({ type: FETCH_URLS_FAILURE, payload: err })
        })
}

export const getPokemon = (url) => (dispatch) => {
    dispatch({ type: FETCH_POKEMON_START })
    axios.get(url)
    .then((res) => {
        dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data })
    })
}
