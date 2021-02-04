import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Adicionar = () => {


  const dispatch = useDispatch()

  return (
    <div>
      <button 
        onClick={() => dispatch({ type: 'ADICIONAR_CARRINHO'})}> + </button>
    </div>
  );
}

export default Adicionar;