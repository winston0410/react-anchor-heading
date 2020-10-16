import React from 'react'
import General from '@blackblock/react-component-boilerplate'
import {
  slugify
} from './utilities/helper.js'

function Heading ({ as = 'h1', children, ...attr }) {
  return (
    <General as={as} id={slugify(children)} {...attr}>
      {children}
    </General>
  )
}

export default Heading
