import expect from 'expect'
import store from '../src/client/store'

describe('store', () => {

  it('stores "text"', () => {
    store.dispatch({
      type: 'INPUT_TEXT',
      text: 'hogehoge'
    })

    expect(store.getState().text)
      .toEqual('hogehoge')
  })

  it('resets "text"', () => {
    store.dispatch({
      type: 'RESET_TEXT'
    })

    expect(store.getState().text)
      .toEqual('')
  })
})
