import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {About} from './Pages/About'
import {Home} from './Pages/Home'
import {Contacts} from './Pages/Contacts'


export interface Iitem {
    id: number
    title: string
    description: string
    img: string
    category: number | string
    price: number
    count: number
}

export function App() {
    const [orders, setOrders] = useState<Array<Iitem>>([])
    const deleteOrder = (idx: number) => {
        setOrders(orders.filter(el => idx !== el.id))
        orders.map(el => el.id === idx ? el.count = 0 : el.count)
    }

    const minus = (item: Iitem) => {
        setOrders([...orders])
        const findItem = orders.find(el => el.id === item.id)
        if (findItem) {
            findItem.count--
        }
    }
    const plus = (item: Iitem) => {
        setOrders([...orders])
        const findItem = orders.find(el => el.id === item.id)
        if (findItem) {
            findItem.count++
        }
    }

    return (
        <div className="wrapper">
            <Header minus={minus} plus={plus} orders={orders} deleteOrder={deleteOrder}/>
            <div>
                <Routes>
                    <Route path="/" element={<Home setOrders={setOrders} orders={orders}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
