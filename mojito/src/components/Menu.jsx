import React from 'react'
import { allCocktails } from '../../constants'

const Menu = () => {
  return (
    <section id="menu" aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>

        <h2 id="menu-heading" className='sr-only'>
            Cocktail Menu
        </h2>

        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {allCocktails.map((cocktail,index)=> {
                const isActive = index === currentIndex
            })}
        </nav>
    </section>
  )
}

export default Menu