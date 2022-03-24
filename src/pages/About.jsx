import React from 'react'
import about from "../images/about.svg";
import Common from '../Components/Common'

const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={about} 
                visit='/contact' 
                btnname="Contact Now" 
            />
        </>
    )
}

export default About
