import React from "react";

import { formatName } from 'src/helpers/format'
import { Chip, Link } from 'src/components'

import styles from "./PokemonInfo.module.scss";

const BASE_INFO = 'Base info:'

interface IForms {
    name: string
}

interface ITypes {
    slot: number,
    type: {
        name: string
        url: string
    }
}

interface IAbilities {
    ability: {
        name: string 
    }
    is_hidden: boolean
    slot: number
}

interface IPokemonInfo {
    id: number | string,
    order: number | string
    baseExperience: number | string
    name: string
    isDefault: boolean
    weight: number | string
    height: number | string
    types: ITypes[]
    abilities: IAbilities[]
    forms: IForms[]
}

const PokemonInfo = ({
    id,
    order,
    baseExperience,
    name,
    isDefault,
    weight,
    height,
    types,
    abilities,
    forms,
}: IPokemonInfo) => {
    const hasDefault = isDefault ? 'Yes' : 'No'

    return (
        <div>
            <h3>{BASE_INFO}</h3>
            <div className={styles.info}>
                <div>ID: {id}</div>
                <div>Order: {order}</div>
                <div>Name: {formatName(name)}</div>
                <div className={styles.infoText}>Type: {types.map(({type}) => (
                    <Chip color={type.name} text={formatName(type.name)} />
                ))}</div>
                <div>Base experience: {baseExperience}</div>
                <div className={styles.infoText}>Abilities: {abilities.map((ability,index) => {
                    const isHidden = ability.is_hidden

                    return (
                        <div>{formatName(ability.ability.name)}{isHidden && '(Hidden)'} {abilities.length !== index + 1 && ','}</div>
                    )
                })}</div>
                <div className={styles.infoText}>Forms: {forms.map(({name}, index) => (
                    <div>
                        <Link to={`/pokemon/${name}`} text={formatName(name)} />
                        {forms.length !== index + 1 && ','}
                    </div>
                ))}</div>
                <div>Height: {height}</div>
                <div>Weight: {weight}</div>
                <div>Default: {hasDefault}</div>
            </div>
        </div>
    );
}

export default PokemonInfo;
