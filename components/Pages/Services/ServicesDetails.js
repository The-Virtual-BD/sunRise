import React from 'react';
import { serviceStragty } from '../../sharedPage/StaticData';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const ServicesDetails = () => {
    return (
        <div className='relative'>
            <div className='text-white bg-darkBg'>
                <div className='max-w-7xl mx-auto py-10'>
                    <div>
                        <h2 className='text-2xl lg:text-4xl font-bold '>Advisory services</h2>
                        <p className='text-base lg:text-lg max-w-5xl mt-4'>We strive to deliver a measurable, lasting impact with our IT advisory services. Namely, we help our clients bridge the gap between technical and business strategy to drive optimal results. In many cases, we also optimize the technology and processes used for the planning, development, and delivery of software to improve business outcomes.</p>
                    </div>
                    <div className='flex items-center justify-center my-14'>
                        <img src="/images/services/img-advisory-circles.svg" alt="img-advisory-circles" />
                    </div>
                </div>
            </div>

            <div className='bg-[#F0F3F6] text-darkBg h-[100vh]'>

                <div className='max-w-7xl mx-auto bg-[#F0F3F6] shadow-xl p-20 relative bottom-20'>
                    <h2 className='text-2xl lg:text-4xl font-bold '>IT consulting workflow: our delivery model</h2>
                    <p className='text-sm lg:text-base max-w-5xl my-7'>Advisory services are delivered across three phases, where we analyze how your business works, draft a plan to impact change, and then focus on implementation in the transformation phase.</p>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {
                            serviceStragty.map(data => <div key={data.id} className='bg-white p-4 rounded-md service-stragty-box'>
                                <div className='flex items-center gap-5'>
                                    <Image src={data.icon} alt={data.name} height={64} width={64} />
                                    <h2 className='text-2xl font-bold '>{data.name}</h2>
                                </div>
                                <p className='text-sm lg:text-base mt-4'>{data.details}</p>

                            </div>)
                        }
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
                            <Link href={"/"} className='flex items-center gap-1'>
                                <span>Get in touch</span> <BsArrowRight />
                            </Link>
                        </button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ServicesDetails;


