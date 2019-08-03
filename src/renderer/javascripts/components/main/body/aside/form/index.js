import React from 'react'
import { useSelector } from 'react-redux'

import Login from './login'
import Card from './card'
import Note from './note'

const Form = ({ entry }) => {
  const { scope } = useSelector(state => state.filters)

  switch (scope) {
    case 'login':
      return <Login entry={entry} />
    case 'card':
      return <Card entry={entry} />
    case 'note':
      return <Note entry={entry} />
    default:
      return null
  }
}

export default Form
