import { actions } from "./actions";

const { 
    POKEMON_LIST,
    POKEMON_LIST_MORE,
    POKEMON
 } = actions;

const initialState = {
    pokemonList: [],
    pokemons: {}
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
            }
        case POKEMON: 
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    [payload.name]: payload.data
                }
            }
        default:
            return {
                ...state
            }
    }
};
