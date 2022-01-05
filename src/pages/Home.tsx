import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import _ from 'lodash'

import { fetchPokemonList } from "src/api/pokemons";
import { PokemonList } from "src/components";
import { IStore } from "src/services/rootStore";

const LIMIT = 20
const LIMIT_PER_PAGE = 10
const TIMER = 400

interface IHome {
    hasScrollBottom: boolean;
}

const Home = ({ hasScrollBottom }: IHome) => {
    const pokemonList = useSelector(
        (store: IStore) => store.pokemons.pokemonList
    );
    const loading = useSelector((store: IStore) => store.notifications.loading);
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        document.documentElement.scrollTop = 0;

        fetchPokemonList(LIMIT, offset);
        setOffset(LIMIT)
    }, []);

    useEffect(() => {
        if (hasScrollBottom) {

            if (
                typeof loading.fetchPokemonList === "boolean" 
                && loading.fetchPokemonList
            ) {
                const handleOffset =  offset + LIMIT_PER_PAGE
                const callFetchPokemonList =  _.throttle(() => {
                    fetchPokemonList(LIMIT_PER_PAGE, handleOffset, true)
                    setOffset(offset + LIMIT_PER_PAGE)
                }, TIMER)
                
                callFetchPokemonList()
            }
        }
    }, [hasScrollBottom]);

    if (!pokemonList.length) {
        <div>Loading...</div>;
    }

    return (
        <div>
            <PokemonList pokemonList={pokemonList} />
        </div>
    );
};

export default Home;
