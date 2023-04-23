import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'

import {Order} from './Order'
import {Iitem} from '../App'


export type Props = {
    orders: Array<Iitem>
    deleteOrder: (id: number) => void
    minus: (item: Iitem) => void
    plus: (item: Iitem) => void
}

const ShowOrders = ({orders, deleteOrder, minus, plus}: Props) => {

    let summa = orders.reduce((acc, el) => acc + (el.price * el.count), 0)
    return <div>
        {orders.map(order =>
            <Order plus={plus} minus={minus} key={order.id} item={order} onDel={deleteOrder}/>)}
        <p className="sum"><b>Итого: {summa} ₽</b></p>
        {summa > 0 && <button className='cart' onClick={() => alert('Спасибо за заказ')} > <b>Оплатить</b></button>}
        <br/><br/>
    </div>
}

export const Header = ({orders, deleteOrder, minus, plus}: Props) => {
    let [open, setOpen] = useState(false)

    return (
        <header>
            <div><b className="logo">Doors Shop</b>
                <ul className="nav">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <li>Главная</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/about">
                        <li>О нас</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/contacts">
                        <li>Контакты</li>
                    </Link>
                </ul>
                <BsFillCartFill onClick={() => setOpen(open = !open)}
                                className={`shop-cart-button ${open && 'active'}`}
                />
                {open && <div className="shop-cart">
                    {orders.length >= 1 ?
                        <ShowOrders plus={plus} minus={minus} orders={orders} deleteOrder={deleteOrder}/>
                        : <h2 className="empty">Товаров нет</h2>}
                </div>
                }
            </div>
        </header>
    )
}


