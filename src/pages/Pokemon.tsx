import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    useSelector,
    useDispatch,
} from 'react-redux'

import { fetchPokemon } from 'src/api/pokemons'
import { IStore } from 'src/services/rootStore'
import { Section } from 'src/components'

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
            <Section>
                <div>Here will me pokemon image</div>
            </Section>
            <div>
                <Section>
                    <div>Here will be pokemon base info</div>
                </Section>
                <Section>
                    <div>Here will be pokemon base stats</div>
                </Section>
            </div>
        </div>
    )
}

export default Pokemon