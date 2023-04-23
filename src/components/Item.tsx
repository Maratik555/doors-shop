import React from 'react'

import {Iitem} from '../App'

type PropsItem = {
    item: Iitem
    onAdd: (item: Iitem) => void
    onShow: (item: Iitem) => void
    onDel: (item: Iitem) => void
}

export const Item = ({item, onAdd, onShow, onDel}: PropsItem) => {
  return (
    <div className="item">
      <img src={'./image/' + item.img} alt="door" onClick={() => onShow(item)}/>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price} ₽</b>
        <span style={{marginLeft : 80}}>

            {item.count > 0 ? <>
	            <button className="btn" onClick={() => onDel(item)}>➖</button>
                <b>{item.count}</b>
	            <button className="btn" onClick={() => onAdd(item)}>➕</button>
                </>
                : <button className='cart' onClick={() => onAdd(item)}>В корзину</button>
            }

        </span>
    </div>
  )
}

