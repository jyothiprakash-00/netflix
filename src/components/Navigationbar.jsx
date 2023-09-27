import React, { useEffect, useState } from 'react'
import './Navigationbar.css'

function Navigationbar() {
    const [show,setShow] =useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
        if(window.scrollY>650){
            setShow(true)
        }else{
            setShow(false)
        }
        })
    })
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="no image"/>
        </div>
  )
}

export default Navigationbar