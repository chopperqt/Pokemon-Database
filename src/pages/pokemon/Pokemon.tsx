import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import { fetchPokemon } from "src/api/pokemons"
import { IStore } from "src/services/rootStore"
import { Section, Img } from "src/components"
import Image from './image/Image'

import styles from './Pokemon.module.scss'

const Pokemon = () => {
    const pokemonData = useSelector((store: IStore) => store.pokemons.pokemons);
    const params = useParams();
    const pokemonName = params!.pokemon;
    const hasPokemon = pokemonName && pokemonData[pokemonName];
    const art =  pokemonName && pokemonData[pokemonName].sprites!.other['official-artwork'].front_default

    useEffect(() => {
        if (!hasPokemon) {
            if (pokemonName) fetchPokemon(pokemonName);
        }
    }, []);

    return (
        <div className={styles.pokemon} >
            {hasPokemon && (
                <Image url={art} alt={pokemonName} />
            )}
            <div>
                <Section>
                    <div>Here will be pokemon base info</div>
                </Section>
                <Section>
                    <div>Here will be pokemon base stats</div>
                </Section>
            </div>
        </div>
    );
};

export default Pokemon;
