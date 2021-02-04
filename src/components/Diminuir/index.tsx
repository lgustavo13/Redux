import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Diminuir = () => {


  const dispatch = useDispatch()

  return (
    <div>
      <button 
        onClick={() => dispatch({ type: 'DIMINUIR_CARRINHO'})}> - </button>
    </div>
  );
}

export default Diminuir;