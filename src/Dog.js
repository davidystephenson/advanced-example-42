import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Dog () {
  const { breed } = useParams()

  const [image, setImage] = useState('')

  const url = `https://dog.ceo/api/breed/${breed}/images/random`
  console.log('url test:', url)

  async function getDog () {
    try {
      const response = await axios.get(url)
      const { data } = response
      const { message } = data
      // const { data: { message } } = await axios.get(url)

      setImage(message)
    } catch (error) {
      console.log(error.message)
    }
  }

  function effect () { getDog() }

  useEffect(effect, [breed]) // only run 1 time at the start

  return (
    <>
      {breed}
      <img src={image} />
    </>
  )
}