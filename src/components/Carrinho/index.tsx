import React from 'react'
import { useSelector } from 'react-redux'

interface Store{
    carrinho: number
}

const Carrinho = () => {
    const valorCarrinho = useSelector((state: Store) => state.carrinho)

    return(
        <p>{valorCarrinho}</p>
    );
}

export default Carrinho