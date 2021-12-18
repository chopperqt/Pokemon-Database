import { getRequest, checkRequest } from 'src/helpers/request'
import {
    POKEMON
} from './url'
import { store } from 'src/index'
import { methods } from 'src/services/rootStore' 

const { pokemonMethods } = methods
const { 
    pokemonList,
    pokemon,
 } = pokemonMethods

async function fetchPokemonList(limit: number, offset: number) {
    const response = await getRequest(`${POKEMON}?limit=${limit}&offset=${offset}`, fetchPokemonList.name)
    
    if (checkRequest(response)) {
        store.dispatch(pokemonList(response.data.results))
    }
}

async function fetchPokemon(name: string) {
    const response = await getRequest(`${POKEMON}/${name}`, fetchPokemon.name)

    if (checkRequest(response)) {
        store.dispatch(pokemon(response.data, name))
    }
}

export {
    fetchPokemonList,
    fetchPokemon,
}