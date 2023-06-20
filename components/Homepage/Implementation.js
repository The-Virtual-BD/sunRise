import React from 'react';
import { implementeServices } from '../sharedPage/StaticData';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const Implementation = () => {
    return (
        <div className='text-paraclr py-20 px-5  bg-[#F7F9FA] '>
            <div className='max-w-7xl mx-auto'>
                <span className='header-design'>
                    Implementation services
                </span>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                    {
                        implementeServices.map(impl => <div key={impl.id} className='bg-white p-8 rounded-sm shadow-lg'>
                            <Image src={impl.icon} alt={impl.title} width={70} height={70} />
                            <h2 className='text-xl lg:text-2xl font-bold text-darkBg my-4 '>{impl.title}</h2>
                            <p className='text-sm lg:text-base mb-4'>{impl.details}</p>

                            {
                                impl.link && <Link href={"/"} className='flex items-center gap-1 text-secondary font-bold text-sm lg:text-xl'>
                                    <BsArrowRight /> <span>{impl.link}</span>
                                </Link>
                            }
                        </div>)
                    }
                </div>

                <div className='flex items-center justify-center'>
                    <button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
                        <Link href={"/"} className='flex items-center gap-1'>
                            <span>All services</span> <BsArrowRight />
                        </Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Implementation;