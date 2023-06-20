import Link from 'next/link';
import React from 'react';
import { ourAchivment } from '../sharedPage/StaticData';
import { BsArrowRight } from 'react-icons/bs';

const WhoWeAre = () => {
    return (
        <div className='text-paraclr py-14 px-5 '>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-paraclr text-3xl lg:text-5xl font-bold py-5'>Who we are</h2>

                <p className='max-w-3xl ml-4 lg:ml-14 text-lg my-5'>Craftsmen. Builders. Makers of IT strategies large and small. Compilers of high performance engineering teams. We are all these things, united by a passion for the craft of programming itself.</p>

                <p className='max-w-3xl ml-4 lg:ml-28 text-lg my-7'>From silicon wafers to cloud architectures, we leverage our understanding of the what, the why, and the how to deliver solutions, strategies, and systems for our customers at the highest velocity possible.</p>

                <div className='ml-10 lg:ml-36 my-5 '>
                    <ul>
                        <li className='text-secondary font-bold text-sm lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                            <BsArrowRight /> <span>About us </span>
                        </Link></li>
                        <li className='text-secondary font-bold text-sm lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                            <BsArrowRight /> <span>What makes us different</span>
                        </Link></li>
                        <li className='text-secondary font-bold text-sm lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                            <BsArrowRight /> <span>Our leadership team</span>
                        </Link></li>
                    </ul>
                </div>
               

                

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 ml-10 lg:ml-36 mt-8'>
                    {
                        ourAchivment.map(achi => <div key={achi.id}>
                            <h3 className='text-3xl lg:text-6xl font-bold text-lightBg'>{achi.title}</h3>
                            <p className='text-sm lg:text-base font-semibold'>{achi.subTitle}</p>
                            <p className='text-sm lg:text-base font-semibold'>{achi.subTitle2}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;