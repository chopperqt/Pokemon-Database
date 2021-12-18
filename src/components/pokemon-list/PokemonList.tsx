import React from 'react'

import PokemonItem from './pokemon-list-item/PokemonItem'

import styles from './PokemonList.module.css'

const PokemonList = ({
    pokemonList
}: {
    pokemonList: {name: string, url: string}[]
}) => (
    <div className={styles.list}>
        {pokemonList.map(({name, url}) => (
            <PokemonItem name={name} url={url} />
        ))}
    </div>
)

export default PokemonList