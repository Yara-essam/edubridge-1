import React from 'react'
import { cardData } from '../../data';
// import card from 'C:\Users\CGC\OneDrive\Desktop\edubridge\src\components\Card.jsx'
import Card1 from './Card1';

export default function Home() {
  return (
    <section id="home">
        <div className="container">
         <div className="home-header">
            <span>Join US</span>
            <h1>Best Learning Opportunities</h1>
            <p>We know how large objects will act, but things on a small scale just do not act that way.</p>
            <a href="#" className="btn btn-red">Get Quote Now</a>
            <a href="#" className="btn btn-transparent">Learn More</a>
         </div>
         <div className="card-container">
          {cardData.map((card) =>{
              const { title, id, bgColor, color, description, img } = card;
              return <Card1 key={id} title={title} bgColor={bgColor} color={color}
                description={description} img={img} />;
            })}
         </div>
        </div>

      
    </section>
  )
}