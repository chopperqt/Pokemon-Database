export const actions = {
    POKEMON_LIST: 'POKEMON_LIST'
}

export const methods = {
    pokemonList<T>(pokemon: T) {
        return {
            type: actions.POKEMON_LIST, payload: pokemon
        }
    }
}