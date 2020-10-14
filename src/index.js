import React from 'react'
import General from 'react-component-boilerplate'
import {
  slugify
} from './utilities/helper.js'

function Heading ({ as = 'h1', attr, children }) {
  return (
    <General as={as} attr={{
      id: slugify(children),
      ...attr
    }}>
      {children}
    </General>
  )
}

export default Heading
