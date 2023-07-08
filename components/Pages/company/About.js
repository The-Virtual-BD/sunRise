import React from 'react';
import Brand from '../../Homepage/Brand';
import Feedbacks from '../Services/Feedbacks';
import Team from '../../Homepage/Team';
import Blogs from '../../Homepage/Blogs';
import Image from 'next/image';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutMission />
            <Team />
            {/* <Feedbacks /> */}
            <AboutHistory />
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

            <div className='max-w-7xl mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-end gap-3 pt-10'>
                <div className='w-full lg:w-1/2'>
                    <div>
                        <h2 className='text-2xl lg:text-4xl font-bold pb-3'>Our Mission</h2>
                        <p className='text-sm lg:text-base my-3'>We are committed to providing state-of-the-art technological solutions to our valued customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers... We are committed to providing state-of-the-art technological solutions to our valued customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers....We are committed to providing state-of-the-art technological solutions to our valued customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers</p>
                    </div>

                    <div className='mt-5'>
                        <h2 className='text-2xl lg:text-4xl font-bold pb-3 '>Our Vision</h2>
                        <p className='text-sm lg:text-base my-3'>We are committed to providing state-of-the-art technology solutions to our customers; to meet and exceed their operational targets and budgetary expectations, therefore creating financial growth and opportunities for our customers.</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>

                    <img src="/images/about/img-road-sign-top.png" alt="" srcset="" />

                </div>
            </div>

        </div>
    )
};


const AboutHistory = () => {
    return (
        <div className='bg-[#F8FAFB]   p-5 lg:p-10 py-20'>

            <div className=' text-darkBg bg-white  max-w-7xl mx-auto px-5 lg:px-0 shadow-xl'>
                <div className='p-3 lg:p-14 flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-2xl lg:text-4xl font-bold pb-3 '>Our History</h2>
                        <p className='text-sm lg:text-base my-3'>Established in 2018 SunRise Communications (SunCom) has dedicated itself to becoming the #1 service providers in advance ROIP Two-Way Communications services and Biometrics Systems. Are passion is technology and we encourage you our future clients to “Work Smarter, Not Harder”. In the age of smart technology, and the ‘internet of things’, efficiency improvements and cost savings are waiting to be found. Communications and Technology opens up a world of efficiency boosting applications for your business. When valuable information is uncovered, the goal is to share it instantly to all concerned parties, no matter where they are located. Knowledge is power. Help your organization and ultimately your teams, reach their full potential by unifying your internal communications and technology. Your solution is just one push away.</p>
                    </div>

                    <div className='w-full lg:w-1/2 flex items-center gap-2 justify-center'>
                        <Image src="/images/about/TTC.jpg" width={265} height={353} alt="" srcset="" />
                        <Image src="/images/about/TTC-2.jpg" width={265} height={353} className='hidden lg:block' alt="" srcset="" />

                    </div>
                </div>

            </div>

        </div>
    )
};
