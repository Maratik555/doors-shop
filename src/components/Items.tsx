import React from 'react'

import {Iitem} from '../App'
import {Item} from './Item'

type Prop = {
  items: Array<Iitem>
  onAdd: (item: Iitem) => void
  onShow: (item: Iitem) => void
  onDel: (item: Iitem) => void
}

export const Items = ({items, onAdd, onShow, onDel}: Prop) => {

  return (
    <main>
      {items.map(item =>
        <Item item={item} key={item.id} onAdd={onAdd} onDel={onDel} onShow={onShow} />
      )}
    </main>
  )
}


