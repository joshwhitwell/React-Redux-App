//Import Action Types
import { FETCH_URLS_START, FETCH_URLS_SUCCESS, FETCH_URLS_FAILURE, FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS } from '../actions/index'

//Declare Initial State
const initialState = {
    pokemon: [],
    openPokemon: null,
    isLoading: false,
    error: ''
}

//Export Reducer Function
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_URLS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_URLS_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_URLS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case FETCH_POKEMON_START:
            return state
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                openPokemon: action.payload
            }
        default:
            return state
    }
}