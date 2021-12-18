import { getRequest, checkRequest } from 'src/helpers/request'
import {
    POKEMON_LIST
} from './url'
import { store } from 'src/index'
import { methods } from 'src/services/rootStore' 

const { pokemonMethods } = methods
const { pokemonList } = pokemonMethods

async function fetchPokemonList(limit: number, offset: number) {
    const response = await getRequest(`${POKEMON_LIST}?limit=${limit}&offset=${offset}`, fetchPokemonList.name)
    
    if (checkRequest(response)) {
        console.log(response)

        store.dispatch(pokemonList(response.data.results))
    }
}

export {
    fetchPokemonList
}