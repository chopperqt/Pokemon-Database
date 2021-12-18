import React, { useEffect, useState} from 'react'

import {
    fetchPokemonList
 } from 'src/api/pokemons'
import { PokemonList } from 'src/components'

const Home = () => {
    const [limit , setLimit] = useState<number>(30)
    const [offset, setOffset] = useState<number>(0) 

    useEffect(() => {
        fetchPokemonList(limit, offset)
    }, [])

    const data = [
        {
            name: 'test',
            url: 'test'
        },
        {
            name: 'test',
            url: 'test'
        },
        {
            name: 'test',
            url: 'test'
        },
        {
            name: 'test',
            url: 'test'
        },
        {
            name: 'test',
            url: 'test'
        },
        {
            name: 'test',
            url: 'test'
        },
        
    ]

    return (
        <div>
            <PokemonList pokemonList={data} />
        </div>
    )
}

export default Home