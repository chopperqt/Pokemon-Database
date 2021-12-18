import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { SkeletonPokemonItem } from 'src/components'
import { IStore } from 'src/services/rootStore'
import { fetchPokemon } from 'src/api/pokemons'
import { formatName } from 'src/helpers/format'

import styles from './PokemonItem.module.css'


interface IPokemonItem {
    name: string,
    url: string,
}

const PokemonItem = ({
    name,
}: IPokemonItem) => {
    const loading = useSelector((store: IStore) => store.notifications.loading)
    const pokemon = useSelector((store: IStore) => store.pokemons.pokemons)

    const img = pokemon[name]?.sprites?.other['official-artwork']?.front_default 

    useEffect(() => {
        if (!pokemon[name]) {
            fetchPokemon(name)
        }
    }, [])

    if (!loading.fetchPokemon) {
        return <SkeletonPokemonItem />
    }

    return (
        <div className={styles.item}>
            <NavLink to={`/pokemon/${name}`}>
                <img className={styles.image} src={img} alt={name} />
            </NavLink>

            {formatName(name)}
        </div>
    )
}

export default PokemonItem