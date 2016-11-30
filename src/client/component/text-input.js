import React from 'react'
import {
  inputText
} from '../actions'

const MIN_LENGTH = 4
const MAX_LENGTH = 8

const TextInput = ({
  store
}) => {
  const currentLength = store.getState().text.length
  let input

  return (
    <div>
      <input
        type="text"
        ref={node => input = node}
        onChange={
          e => store.dispatch(inputText(input.value))
        }
      />
      {
        currentLength === 0 ? null
        : currentLength < MIN_LENGTH ? (
          <span>Too short!</span>
        ) : currentLength > MAX_LENGTH ? (
          <span>Too long!</span>
        ) : null
      }
    </div>
  )
}

export default TextInput
