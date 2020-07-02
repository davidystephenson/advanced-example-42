import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

function ColorForm() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  // const params = useParams()
  // const { guess } = params
  // console.log('params test:', params)

  const { guess } = useParams()

  function up() {
    const newCount = count + 1

    setCount(newCount)
  }

  function onSubmit(event) {
    // Don't reload!
    event.preventDefault()

    console.log(`${name}'s favorite color is ${color}`)
  }

  function reset() {
    setName('')
    setColor('')
  }

  return (
    <>
      my guess is: {guess}
      <form onSubmit={onSubmit}>
        <h5>Name</h5>
        <input
          onChange={event => setName(event.target.value)}
          value={name}
        />
        {name}

        <h5>Color</h5>
        <input
          onChange={event => setColor(event.target.value)}
          value={color}
        />
        {color}

        <div>
          <button>Submit</button>
          <button type='button' onClick={reset}>{/* not a submit */}
            Reset
          </button>
        </div>
      </form>

      <button onClick={up}>up</button>
      {count}
    </>
  );
}

export default ColorForm
