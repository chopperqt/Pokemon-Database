import { getRequest, checkRequest } from 'src/helpers/request'
import {
    POKEMON
} from './url'
import { store } from 'src/index'
import { methods } from 'src/services/rootStore' 

const { pokemonMethods } = methods
const { 
    pokemonList,
    pokemonListMore,
    pokemon,
    pokemonSearch,
    pokemonSearchClear
 } = pokemonMethods

async function fetchPokemonList(limit: number, offset: number, more?: boolean) {
    const response = await getRequest(`${POKEMON}?limit=${limit}&offset=${offset}`, fetchPokemonList.name)
    
    if (checkRequest(response)) {
        if (more) {
            return store.dispatch(pokemonListMore(response.data.results))
        }
        store.dispatch(pokemonList(response.data.results))
    }
}

async function fetchPokemon(name: string) {
    const response = await getRequest(`${POKEMON}/${name}`, fetchPokemon.name)

    if (checkRequest(response)) {
        store.dispatch(pokemon(response.data, name))
    }

    return response
}

async function searchPokemon(name: string) {
    const formatName = name.toLowerCase()

    const response = await getRequest(`${POKEMON}/${formatName}`, searchPokemon.name)

    if (checkRequest(response)) {
        store.dispatch(pokemonSearch(response.data))

        return
    }

    return store.dispatch(pokemonSearchClear())
}

export {
    fetchPokemonList,
    fetchPokemon,
    searchPokemon,
}