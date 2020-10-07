//Import Action Types
import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from '../actions/index'

//Declare Initial State
const initialState = {
    pokemon: [],
    isLoading: false,
    error: ''
}

//Export Reducer Function
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_POKEMON_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                pokemon: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}