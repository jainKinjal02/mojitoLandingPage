import React from 'react'
import { goodLists } from '../../constants'

const Art = () => {
  return (
    <div id="art">
        <div className='container mx-auto h-full pt-20'>
            <h2 className='will-fade'>The ART</h2>

            <div className='content'>
                <ul className='space-y-4 will-fade'>
                    {goodLists.map((feature,index)=> (
                        <li key={index} className='flex intems-center gap-2'>
                            <img src="/images/check.png" alt="check" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Art