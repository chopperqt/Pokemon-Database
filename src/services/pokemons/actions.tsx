export const actions = {
    POKEMON_LIST: 'POKEMON_LIST',
    POKEMON: 'POKEMON'
}

export const methods = {
    pokemonList<T>(pokemon: T) {
        return {
            type: actions.POKEMON_LIST, payload: pokemon
        }
    },
    pokemon<T>(pokemon: T, name: string) {
        return {
            type: actions.POKEMON, payload: {
                name,
                data: pokemon
            }
        }
    }
}