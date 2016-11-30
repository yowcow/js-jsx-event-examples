import expect from 'expect'
import {
  inputText,
  resetText
} from '../src/client/actions'

describe('inputText', () => {

  it('should return action for type "INPUT_TEXT"', () => {
    expect(inputText('hogehoge'))
      .toEqual({
        type: 'INPUT_TEXT',
        text: 'hogehoge'
      })
  })
})

describe('resetText', () => {

  it('should return action for type "RESET_TEXT"', () => {
    expect(resetText())
      .toEqual({
        type: 'RESET_TEXT'
      })
  })
})
