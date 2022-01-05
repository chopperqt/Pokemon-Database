import { actions } from "./actions";

const { 
    POKEMON_LIST,
    POKEMON_LIST_MORE,
    POKEMON,
    POKEMON_SEARCH,
    POKEMON_SEARCH_CLEAR,
 } = actions;

const initialState = {
    pokemonList: [],
    pokemons: {},
    search: {},
};

export const pokemonStore = (
    state = initialState,
    {
        type,
        payload,
    }: {
        type: string;
        payload: any;
    }
) => {
    switch (type) {
        case POKEMON_LIST:
            return {
                ...state,
                pokemonList: payload,
            };
        case POKEMON_LIST_MORE:
            return {
                ...state,
                pokemonList: [...state.pokemonList, ...payload]
            };
        case POKEMON: 
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    [payload.name]: payload.data
                }
            };
        case POKEMON_SEARCH: 
            return {
                ...state,
                search: payload
            };
        case POKEMON_SEARCH_CLEAR:
            return {
                ...state,
                search: {}
            };
        default:
            return {
                ...state
            };
    }
};
