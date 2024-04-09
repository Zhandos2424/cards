import { useEffect, useState } from 'react'
import '../App.css'
import Card from './Card'
export default function Cards({ products, setBasket }) {
  const [cards, setCards] = useState(products)
  const [value, setValue] = useState('')
  useEffect(() => {
    setCards(
      products.filter(p => p.text.toLowerCase().includes(value.toLowerCase()))
    )
  }, [value])
  return (
    <div className='cards'>
      <div className='search'>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      {cards.map(p => (
        <Card product={p} setBasket={setBasket} data='cards' />
      ))}
    </div>
  )
}