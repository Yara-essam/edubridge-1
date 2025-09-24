import React from 'react'

export default function JoinUs() {
  return (
    <section id="join-us">
      <div className="contant">
        <p className="text-primary">Practice Advice</p>
        <h2>JOIN US</h2>
        <p>Have questions or need assistance? Reach out to us through our team we are here to help and ensure you have the best experience possible!</p>
        <form>
          <input type="email" name="email" id="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      
    </section>
  )
}