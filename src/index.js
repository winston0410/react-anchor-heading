import React from 'react'
import General from '@blackblock/react-component-boilerplate'
import {
  slugify
} from './utilities/helper.js'

const Heading = React.forwardRef(
  function Heading ({ as = 'h1', children, ...attr }, ref) {
    return (
      <General ref={ref} as={as} id={slugify(children)} {...attr}>
        {children}
      </General>
    )
  })

export default Heading
