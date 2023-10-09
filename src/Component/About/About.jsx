import React from 'react'
import Back from '../Back/Back'
import img from "../About/about us.jpg"
import Heading from '../../common/header/Heading'
import './about.css'

const About = () => {
  return (
    <>
    <section className='about'>
       <Back name="about us" title='About us-who we are?' cover={img}/>
       <div className="container flex mtop">
        <div className="left row">
            <Heading title='Zways Global Limited' subtitle='Where Vision Meets Precision in Survey,Engineering,and Real Estate Consultation'/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero dignissimos autem distinctio enim illo corporis nam eius molestiae itaque accusamus, fugit ut velit repudiandae! Reiciendis vel quae vitae dignissimos?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero dignissimos autem distinctio enim illo corporis nam eius molestiae itaque accusamus, fugit ut velit repudiandae! Reiciendis vel quae vitae dignissimos?</p>

            <button className='btn2'>More About us</button>
        </div>
        <div className="right row">
            <img src='../About/about us.jpg' alt="" />
        </div>
       </div>
    </section>
    </>
  )
}

export default About


