import React from 'react';
import home from "../images/home.svg";
import Common from '../Components/Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={home} 
                isCompName={true}
                compName="Okitan Studio"
                visit='/services' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;