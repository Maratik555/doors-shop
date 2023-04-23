import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {Iitem} from '../App'

export type Props = {
  im: Iitem,
  onAdd: (item: Iitem) => void,
  onShow: (item: Iitem) => void
}

export const Show = ({ im, onAdd, onShow }: Props) => {
  return (
    <div className="fullItem">
      <div>
        <IoCloseCircleOutline className="close-popup" onClick={() => onShow(im)}/>
        <img src={'./image/' + im.img} alt="door"/>
        <h2>{im.title}</h2>
        <p>{im.description}</p>
        <button className="add-to-cart" onClick={() => onAdd(im)}> + {im.count > 0 ? im.count : null}</button>
        <b>{im.price} ₽</b>
      </div>
    </div>
  )
}

