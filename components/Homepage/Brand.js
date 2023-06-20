import React from 'react';
import verizon from "../../public/images/Brand/logo-verizon.svg"
import Image from 'next/image';

const Brand = () => {
    return (
        <div className='bg-white p-7 border-[1px] border-gray-300 '>
            <div className='grid grid-cols-3 md:grid-cols-3   lg:grid-cols-6 items-center gap-5 max-w-7xl mx-auto'>
                <Image src={"/images/Brand/logo-verizon.svg"} width={121} height={30} alt='brand' className='brand-image' />
                <Image src={"/images/Brand/logo-yahoo-japan.svg"} width={121} height={30} alt='brand' className='brand-image' />
                <Image src={"/images/Brand/logo-bcg.svg"} width={110} height={30} alt='brand' className='brand-image'/>
                <Image src={"/images/Brand/logo-nasdaq.svg"} width={121} height={30} alt='brand' className='brand-image'/>
                <Image src={"/images/Brand/logo-nyse.svg"} width={121} height={30} alt='brand' className='brand-image'/>
                <Image src={"/images/Brand/logo-point-one.png"} width={121} height={30} alt='brand' className='brand-image'/>
            </div>
        </div>
    );
};

export default Brand;