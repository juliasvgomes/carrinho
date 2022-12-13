import React, { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { BsFillCartDashFill } from 'react-icons/bs';
import { ProductsArea } from '../style/style';
import { Header } from '../components/Header';


export const Cart = () => {
    const [data, setData] = useState( getItem('carrinho') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinho',arrFilter)
}

const subTotal = data.reduce((acc,cur) => acc + cur.price ,0)

return (
    <div>
        <Header/>
            <ProductsArea>
            {
                data.map((e) => (
                <div key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt={e.description} />
              <h4>{`R$ ${e.price}`}</h4>
              <button
                onClick={ () => removeItem(e)}
              >
                <BsFillCartDashFill />
              </button>
            </div>
          ))
        }
        </ProductsArea>
        <h3>{`TOTAL: ${subTotal}`}</h3>
    </div>
)
}