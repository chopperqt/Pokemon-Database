import React from 'react'

import { Img } from 'src/components'
import not_found from 'src/templates/404.png'


const NotFound = ( ) => (
    <div>
        <Img src={not_found} alt="404" />
    </div>
)

export default NotFound