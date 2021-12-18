import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { SkeletonPokemonItem } from 'src/components'
import { IStore, methods } from 'src/services/rootStore'
import { fetchPokemon } from 'src/api/pokemons'

import styles from './PokemonItem.module.css'

const { notificationsMethods } = methods
const { loadingRequest } = notificationsMethods

interface IPokemonItem {
    name: string,
    url: string,
}

const PokemonItem = ({
    name,
    url,
}: IPokemonItem) => {
    const loading = useSelector((store: IStore) => store.notifications.loading)
    const pokemon = useSelector((store: IStore) => store.pokemons.pokemons)

    const img = pokemon[name].sprites.other['official-artwork'].front_default || name

    useEffect(() => {
        if (!pokemon[name]) {
            fetchPokemon(name)
        }
    }, [pokemon, name])

    if (!loading.fetchPokemon) {
        return <SkeletonPokemonItem />
    }

    return (
        <div>
            <img className={styles.image} src={img} alt={name} />
            {name}
        </div>
    )
}

export default PokemonItem