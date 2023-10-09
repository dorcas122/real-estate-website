import React from 'react'
import "./featured.css"
import Heading from '../../common/header/Heading'
import FeaturedCard from './FeaturedCard'

const Featured=()=>{
    return(
        <>
            <section className='featured background'>
                <div className="container">
                    <Heading title='Featured property Types' subtitle='Find All types of property'/>
                    <FeaturedCard/>
                </div>
            </section>
        </>
    )
}

export default Featured