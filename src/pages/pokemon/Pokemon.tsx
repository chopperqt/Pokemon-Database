import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchPokemon } from "src/api/pokemons";
import { IStore } from "src/services/rootStore";
import { Section, ProgressBar } from "src/components";
import Image from "./pokemon-image/Image";
import PokemonInfo from "./pokemon-info/PokemonInfo";

import styles from "./Pokemon.module.scss";

interface IStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

const BASE_STAT = "Base Stats:"
 
const Pokemon = () => {
    const pokemonData = useSelector((store: IStore) => store.pokemons.pokemons);
    const params = useParams();
    const pokemonName = params!.pokemon;
    const hasPokemon = pokemonName && pokemonData[pokemonName];
    const art =
        pokemonName &&
        pokemonData[pokemonName].sprites!.other["official-artwork"]
            .front_default;
    const stats = pokemonName && pokemonData[pokemonName].stats;
    const id = pokemonName && pokemonData[pokemonName].id
    const order = pokemonName && pokemonData[pokemonName].order
    const baseExperience = pokemonName && pokemonData[pokemonName].base_experience 
    const name = pokemonName && pokemonData[pokemonName].name 
    const isDefault = pokemonName && pokemonData[pokemonName].is_default
    const weight = pokemonName && pokemonData[pokemonName].weight
    const height = pokemonName && pokemonData[pokemonName].height
    const types = pokemonName && pokemonData[pokemonName].types
    const abilities = pokemonName && pokemonData[pokemonName].abilities
    const forms = pokemonName && pokemonData[pokemonName].forms

    useEffect(() => {
        if (!hasPokemon) {
            if (pokemonName) fetchPokemon(pokemonName);
        }
    }, []);

    return (
        <div className={styles.pokemon}>
            {hasPokemon && <Image url={art} alt={pokemonName} />}
            <div>
                <Section>
                    <PokemonInfo
                        height={height}
                        weight={weight}
                        isDefault={isDefault}
                        baseExperience={baseExperience}
                        id={id}
                        name={name}
                        order={order}
                        types={types}
                        abilities={abilities}
                        forms={forms}
                    />
                </Section>
                {hasPokemon && (
                    <Section>
                        <div>
                            <h3>{BASE_STAT}</h3>
                            <div className={styles.stats}>
                                {stats.map((stat: IStat) => (
                                    <ProgressBar
                                        name={stat.stat.name}
                                        stat={stat.base_stat}
                                    />
                                ))}
                            </div>
                        </div>
                    </Section>
                )}
            </div>
        </div>
    );
};

export default Pokemon;
