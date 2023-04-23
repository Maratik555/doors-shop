import React, {useState} from 'react'

interface Props {
  categories: string[]
  chooseCategory: (category: number | string) => void
}

export const Categories = ({categories, chooseCategory} : Props) => {
  const [active, setActive] = useState(0)
  const activeIndex = (i: any) => setActive(i)

  return (
    <div className={'categories'}>
      {categories.map((category,i) =>
        <div className={active === i ? 'active' : ''} key={category[i]} onClick={() => {
          chooseCategory(category)
          activeIndex(i)
        }}>{category}</div>
      )}
    </div>
  )
}

