import page from 'page'
import React from 'react'
import ReactDOM from 'react-dom'

import Form from './client/component/form'
import store from './client/store'

const render = () =>
  ReactDOM.render(
    <Form store={store} />,
    document.getElementById('app')
  )

store.subscribe(render)
store.subscribe(() => {
  console.log('Dispatched state change!')
  console.log(store.getState())
})

page('/', ctx => render())

page()
