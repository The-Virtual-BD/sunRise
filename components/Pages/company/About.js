import React from 'react';
import Brand from '../../Homepage/Brand';
import Feedbacks from '../Services/Feedbacks';
import Team from '../../Homepage/Team';
import Blogs from '../../Homepage/Blogs';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutMission />

            <Team />
            <Feedbacks />
            <Blogs />

        </div>
    );
};

export default About;


const AboutBanner = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/banner/img-slider-03.png")`,
                boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)"
            }} className="  text-white flex items-center slider-bg">


                <div className=' '>
                    <div className="text-start mb-10 px-5 lg:px-24 ">
                        <div className='flex items-center justify-start '>
                            <h1 className='why-header-design'>About us</h1>
                        </div>
                        <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">Passionate & driven</h1>
                        <h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">software development + consulting</h3>
                        <p className="bg-darkBg bg-opacity-50 px-3 py-7 rounded-md max-w-4xl text-sm lg:text-base mt-2">Our software development company architects, builds, and supports business-critical software systems. We partner with our customers to solve complex problems in software engineering and computer science, delivering meaningful impact and lasting value.</p>
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    )
};

const AboutMission = () => {
    return (
        <div className='bg-[#F8FAFB] text-darkBg '>

            <div className='max-w-7xl mx-auto px-5 lg:px-0 flex items-center gap-3'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl lg:text-4xl font-bold pb-3'>OUR MISSION</h2>
                    <p className='text-sm lg:text-base my-5'>We are committed to providing state-of-the-art technological solutions to our valued customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers... We are committed to providing state-of-the-art technological solutions to our valued customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers....We are committed to providing state-of-the-art technological solutions to our valued customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers</p>
                </div>

                <div className='w-full lg:w-1/2'>

                    <img src="/images/about/img-road-sign-top.png" alt="" srcset="" />

                </div>
            </div>

        </div>
    )
};




/* 
const AboutBanner=()=>{
    return(
        <div>

        </div>
    )
};
const AboutBanner=()=>{
    return(
        <div>

        </div>
    )
}; */