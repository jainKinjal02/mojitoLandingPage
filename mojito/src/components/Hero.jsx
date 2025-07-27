import React from 'react'

const Hero = () => {
  return (
    <>
        <section id="hero" className='noisy'>
            <h1 className='title'>COCKTAILS</h1>
            <img src='/images/hero-left-leaf.png' 
            alt="left-leaf"
            className='left-leaf'
             />
            <img src='/images/hero-right-leaf.png' 
            alt="right-leaf"
            className='right-leaf'
             />

             <div className='body'>
                <div className='content'>
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className='subtitle'>Sip the Spirit <br /> of Summer</p>
                    </div>

                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            A blend of premium ingredients, creative flair and timeless recipes designed to delight your senses.
                        </p>
                        <a href="#cocktails">
                            View Cocktails
                        </a>
                    </div>
                </div>
             </div>
        </section>
    </>
  )
}

export default Hero