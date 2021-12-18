import React from 'react'

import { SkeletonPokemonItem } from 'src/components'

interface IPokemonItem {
    name: string,
    url: string,
}

const PokemonItem = ({
    name,
    url,
}: IPokemonItem) => {



    return (
        // <div>
        //     {name}
        //     {url}
            <SkeletonPokemonItem />
        // </div>
    )
}

export default PokemonItem