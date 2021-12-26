export const actions = {
    POKEMON_LIST: 'POKEMON_LIST',
    POKEMON_LIST_MORE: 'POKEMON_LIST_MORE',
    POKEMON: 'POKEMON'
}

export const methods = {
    pokemonList<T>(pokemon: T) {
        return {
            type: actions.POKEMON_LIST, payload: pokemon
        }
    },
    pokemonListMore<T>(pokemon: T) {
        return {
            type: actions.POKEMON_LIST_MORE, payload: pokemon
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