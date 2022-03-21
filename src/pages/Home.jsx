import React from 'react'

const Home = () => {
  return (
    <>
        <header className="hero-header">
        <div>
          <h1>Kickers</h1>
        </div>
        <div>
          <img src="i/images/background.jpeg" alt="sneakerhero"/>
        </div>
    </header>

    <h2 className="indexh2">Most Popular Kicks</h2>
    <h3 className="indexh3">Good shoes take you to good places</h3>
    <div className="indexcontainer">
        <div className="resourcesimages"><img src="/images/jordan11.webp" alt="resourcesimage1"></img></div>
        <div className="resourcesimages"><img src="/images/jordan12.webp" alt="resourcesimage1"></img></div>
        <div className="resourcesimages"><img src="/images/jordan2.jpeg" alt="resourcesimage1"></img></div>
    </div>

    <section>
        <h2 className="indexh2">The culture</h2>
        <h3 className="index-h3">For Sneakerheads, sneakers are about more than foot transportation and comfort. But what does it mean to be a Sneakerhead? Does any sneaker count? And how much do they cost?</h3>
        <h4 className="indexh4">The last decade has seen a huge shift in how sneakers are worn. Donning a pair is no longer frowned upon in the workplace or on more formal occasions. Even British etiquette experts Debrett’s have given their seal of approval, deeming them socially acceptable for smart casual occasions. The continued dominance of the athleisure trend has had a significant impact on the growing sales of sneakers – along with the pursuit of comfort. This only grew more during the pandemic as lockdowns made people further prioritise comfort, which resulted in a rise in sales of loungewear, athleisure and flat shoes, like sneakers.</h4>
        <h5 className="indexh5">As such, sneakers have moved from the niche to become coveted as fashionable objects. Footwear is now the biggest selling category in the online luxury market and sneakers have made a significant contribution to this growth. High fashion brands from Gucci to Balenciaga are setting the pace in the luxury sneaker market. In 2017, Balenciaga’s Triple S became the biggest seller in the luxury sneaker market and its popularity seems unstoppable. To understand how the sneaker has emerged to become a footwear phenomenon, it is important to trace its legacy from function to cultural icon.</h5>
        

    </section>
    </>
  )
}

export default Home