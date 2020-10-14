import React from 'react'
import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'
import Heading from '../src/index.js'
import {slugify} from '../src/utilities/helper.js'
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
require('global-jsdom')()

let rootContainer

beforeEach(function() {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(function() {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Anchor heading testing', function() {
  it('should not fail if no data is passed int as question', function() {
    ReactDOM.render(<Heading>
      Hello world
    </Heading>, rootContainer)

    const renderedBlock = rootContainer.querySelector('h1')

    expect(renderedBlock.id).to.eql(slugify(renderedBlock.textContent))

  })
})
