import React, {useState} from 'react'

import {Categories} from '../components/Categories'
import {Items} from '../components/Items'
import {Show} from '../components/Show'
import {Iitem} from '../App'


type Props = {
    orders: Array<Iitem>
    setOrders: ([]: Array<Iitem>) => void
}


export const Home = ({orders, setOrders}: Props) => {
    const [items] = useState<Array<Iitem>>([
        {
            id: 1,
            title: 'Дверь глухая',
            description: 'lorem ipsum dolor sit amet, consectetur adip',
            img: 'door1.jpg',
            category: 'глухие',
            price: 50000,
            count: 0
        },
        {
            id: 2,
            title: 'Дверь со стеклами',
            description: 'lorem ipsum dolor sit amet, consectetur adip',
            img: 'door2.jpg',
            category: 'со стеклами',
            price: 60000,
            count: 0
        },
        {
            id: 3,
            title: 'Дверь 2 квадрата',
            description: 'lorem ipsum dolor sit amet, consectetur adip',
            img: 'door3.jpg',
            category: 'все',
            price: 55000,
            count: 0
        },
        {
            id: 4,
            title: 'Дверь железная',
            description: 'lorem ipsum dolor sit amet, consectetur adip',
            img: 'door4.png',
            category: 'железные',
            price: 75000,
            count: 0
        },
        {
            id: 5,
            title: 'Дверь стильная',
            description: 'lorem ipsum dolor sit amet, consectetur adip',
            img: 'door5.png',
            category: 'стильные',
            price: 45000,
            count: 0
        }
    ])

    let [current, setCurrent] = useState(items)
    let [show, setShow] = useState(false)
    let [fullItem, setFullItem] = useState<Array<Iitem>>([])

    let categories = ['все', 'глухие', 'со стеклами', 'железные', 'стильные']

    const chooseCategory = (category: number | string) => {
        if (category === 'все') {
            setCurrent(current = items)
            return
        }
        setCurrent(current = items.filter(item => item.category === category))
    }

    const onShow = (el: any) => {
        setFullItem(fullItem = el)
        setShow(prev => !prev)
    }


    const addOrder = (item: Iitem) => {
        const findItem = orders.find(el => el.id === item.id)
        if (findItem) {
            findItem.count ++
            setOrders([...orders])
        } else {
            setOrders([...orders, item])
            item.count ++
        }
    }

    const delOrder = (item: Iitem) => {
        const findItem = orders.find(el => el.id === item.id)
        if (findItem) {
            findItem.count --
            setOrders([...orders])
        } else {
            setOrders([...orders, item])
            item.count --
        }
    }

    return (
        <div>
            <div className="present"/>
            <Categories chooseCategory={chooseCategory} categories={categories}/>
            <Items onShow={onShow} items={current} onAdd={addOrder} onDel={delOrder}/>
            {/*@ts-ignore*/}
            {show && <Show im={fullItem} onAdd={addOrder} onShow={onShow}/>}
        </div>
    )
}

