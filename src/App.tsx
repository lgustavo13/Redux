import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Carrinho from './components/Carrinho'
import Adicionar from './components/Adicionar'
import Diminuir from './components/Diminuir'
import { Store } from './types'

const initialState: Store = {
  carrinho:0
}

function reducer(state = initialState, action:any) {
  switch(action.type) {
    case 'ADICIONAR_CARRINHO':
      return {
        carrinho: state.carrinho + 1
      };
    case 'DIMINUIR_CARRINHO':
      return {
        carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho,
      };
    default: 
      return state
  }
}

const store = createStore(reducer)

function App() {
  return(
    <Provider store={store}>
      <Adicionar />
      <Carrinho />
      <Diminuir />
    </Provider>
  )
}

export default App;
