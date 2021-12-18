import { actions } from "./actions";

const { POKEMON_LIST } = actions;

const initialState = {
    pokemonList: [],
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
        default:
            return {
                ...state
            }
    }
};
