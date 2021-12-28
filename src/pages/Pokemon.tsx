import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    useSelector,
    useDispatch,
} from 'react-redux'

import { fetchPokemon } from 'src/api/pokemons'
import { IStore } from 'src/services/rootStore'

const Pokemon = () => {
    const pokemonData = useSelector((store: IStore) => store.pokemons.pokemons)
    const params = useParams()
    const pokemonName = params!.pokemon
    const hasPokemon = pokemonName &&  pokemonData[pokemonName]

    useEffect(() => {
        if (!hasPokemon) {
            if (pokemonName) fetchPokemon(pokemonName)
        }
    }, [])
    

    return (
        <div>
            <img 
                src='/'
                
            />
        </div>
    )
}

export default Pokemon