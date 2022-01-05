import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchPokemon } from "src/api/pokemons";
import { IStore } from "src/services/rootStore";
import { Section, ProgressBar, Footer, Loader } from "src/components";
import Image from "./pokemon-image/Image";
import PokemonInfo from "./pokemon-info/PokemonInfo";

import styles from "./Pokemon.module.scss";

interface IStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

const BASE_STAT = "Base Stats:";

const Pokemon = () => {
    const pokemonData = useSelector((store: IStore) => store.pokemons.pokemons);
    const params = useParams();
    const pokemonName = params!.pokemon;
    const hasPokemon = pokemonName && pokemonData[pokemonName]

    const art =
    hasPokemon &&
        pokemonData[pokemonName].sprites!.other["official-artwork"]
            .front_default;
    const stats = hasPokemon && pokemonData[pokemonName].stats;
    const id = hasPokemon && pokemonData[pokemonName].id;
    const order = hasPokemon && pokemonData[pokemonName].order;
    const baseExperience =
    hasPokemon && pokemonData[pokemonName].base_experience;
    const name = hasPokemon && pokemonData[pokemonName].name;
    const isDefault = hasPokemon && pokemonData[pokemonName].is_default;
    const weight = hasPokemon && pokemonData[pokemonName].weight;
    const height = hasPokemon && pokemonData[pokemonName].height;
    const types = hasPokemon && pokemonData[pokemonName].types;
    const abilities = hasPokemon && pokemonData[pokemonName].abilities;
    const forms = hasPokemon && pokemonData[pokemonName].forms;

    useEffect(() => {
        if (!hasPokemon) {
            if (pokemonName) fetchPokemon(pokemonName);
        }
    }, []);

    if (!hasPokemon) {
        console.log('test', hasPokemon)

        return <Loader />
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.pokemon}>
                    {hasPokemon && <Image url={art} alt={pokemonName} />}
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
                </div>
                <div>
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
                <Footer />
            </div>
        </>
    );
};

export default Pokemon;
