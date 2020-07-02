import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome () {

  const guesses = ['red', 'blue', 'green', 'brown']

  const links = guesses.map(guess => (
    <p>
      <Link to={`/color/${guess}`}>{guess}</Link>
    </p>
  ))

  return <>
    <p>hello</p>

    {links}

    <p>
      <Link to='/dog/appenzeller'>Appenzeller</Link>
    </p>

    <p>
      <Link to='/dog/boxer'>boxer</Link>
    </p>
  </>
}