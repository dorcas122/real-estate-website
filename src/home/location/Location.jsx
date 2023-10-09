import React from 'react'
import './location.css'
import Heading from '../../common/header/Heading'
import { location } from '../../Component/data/data'

const Location = () => {
  return (
    <>
    <section className='location padding'>
         <div className="container">
            <Heading title="Explore By LOcation" subtitle="the place ypu can never imagined" />

            <div className="content grid3 mtop">
              {location.map((items,index)=>{
               return(
               <div className="box" key={index}>
                  <img src={items.cover} alt="" />
                  <div className='overlay'>
                        <h5>{items.name}</h5>
                        <p>
                        <label>{items.Villas}</label>
                        <label>{items.Offices}</label>
                        <label>{items.Apartment}</label>
                        </p>
                  </div>
                </div>
               )
              })}
            
            </div>
         </div>
    </section>
    </>
  )
}

export default Location