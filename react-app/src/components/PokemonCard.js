//React Dependencies
import React, { useState } from 'react'

//Redux Dependencies
import { connect } from 'react-redux'

import { getPokemon } from '../store/actions'

function PokemonCard(props) {
    const [isOpen, setIsOpen] = useState(false)
    const { pokemon } = props
    return (
        <div className='pokemon-card'>
            <h2>{pokemon.name}</h2>
            <p onClick={() => {
                setIsOpen(true)
                props.getPokemon(pokemon.url)
                }}>+</p>
            {isOpen && props.openPokemon? <img src={props.openPokemon.sprites.front_default} alt={pokemon.name} /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        openPokemon: state.openPokemon
    }
}

export default connect(mapStateToProps, { getPokemon })(PokemonCard)