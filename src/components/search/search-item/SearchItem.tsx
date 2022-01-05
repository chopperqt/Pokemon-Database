import React from 'react'
import { NavLink } from 'react-router-dom'

import { 
    Img, 
    Link,
    Chip,
} from 'src/components'
import { formatName } from 'src/helpers/format'

import styles from './SearchItem.module.scss'

interface ITypes {
    slot: number,
    type: {
        name: string
        url: string
    }
}

interface ISearchItem {
    click?: () => void
    img: string,
    name: string,
    id: string,
    types: ITypes[]
    isDefault: boolean
    order: string | number
}

const SearchItem = ({
    img,
    name,
    id,
    types,
    order,
    isDefault,
    click
}: ISearchItem) => {
    const pokemonUrl = `/pokemon/${name}`
    const correctName  = formatName(name)
    const formatIdOrders = `ID: ${id} Order: ${order}`
    const hasDefault = isDefault ? 'Default: Yes' : 'Default: No'


    return (
        <div className={styles.item}>
            <NavLink 
                to={pokemonUrl} 
                onClick={click}
            >
                <Img 
                    src={img} 
                    alt={name} 
                    className={styles.image}
                />
            </NavLink>
            <div className={styles.info}>
                <Link 
                    to={pokemonUrl} 
                    text={correctName}
                    click={click}
                />
                <div className="text-size-md">{formatIdOrders}</div>
                <div className={styles.types}>
                    {types && types.map(type => (
                        <Chip 
                            key={type.type.name} 
                            color={type.type.name} 
                            text={formatName(type.type.name)} 
                        />
                    ))}
                </div>
                <div className="text-size-md">{hasDefault}</div>
            </div>
        </div>
    )
}

export default SearchItem