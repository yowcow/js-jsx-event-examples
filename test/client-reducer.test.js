import expect from 'expect'
import freeze from 'deep-freeze'
import { textFieldReducer } from '../src/client/reducers'

describe('textFieldReducer', () => {

  it('returns initial state', () => {
    expect(textFieldReducer(undefined, {}))
      .toEqual('')
  })

  it('returns next state', () => {
    const action = {
      type: 'INPUT_TEXT',
      text: 'hogehoge'
    }

    freeze(action)

    expect(textFieldReducer(undefined, action))
      .toEqual('hogehoge')
  })

  it('returns reset state', () => {
    const action = {
      type: 'RESET_TEXT'
    }

    expect(textFieldReducer('hogehoge', action))
      .toEqual('')
  })
})
