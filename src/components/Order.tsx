import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {Iitem} from '../App'

interface Props {
    item: Iitem
    onDel: (item: number) => void
    minus: (item : Iitem) => void
    plus: (item : Iitem) => void
}

export const Order = ({item, onDel, minus, plus}: Props) => {
    return (
        <div className="item">
            <img src={'./image/' + item.img} alt="door"/>
            <h2>{item.title}</h2>
            <b>{item.price * item.count} ₽</b><br/>
            <button className="btn" disabled={item.count === 1} onClick={() => minus(item)}>➖</button> <b>{item.count} шт </b> <button className="btn" onClick={() => plus(item)}>➕</button>
            <br/>
            <IoCloseCircleOutline className="delete-icon" onClick={() => onDel(item.id)}/>
        </div>
    )
}


