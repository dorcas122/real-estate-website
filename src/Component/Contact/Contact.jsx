import React from 'react'
import Back from '../Back/Back'
import img from "../About/about us.jpg"
import './contact.css'

const Contact = () => {
  return (
    <>
    <section className='contact mb'>
        <Back name='Contact Us' title="Get Helps & Friendly Support" cover={img}/>
    </section>
    <div className="container">
        <form action="" className='shadow'>
            <h4>Fill up the form</h4>
            <div>
               <input type="text" placeholder='Name' /> 
               <input type="text" placeholder='Email' /> 
            </div>
            <input type="text" placeholder='Subject' /> 
            <textarea name="" id="" cols="30" rows="10">   </textarea>
            <button>Submit Request</button>
        </form>
    </div>
    </>
  )
}

export default Contact