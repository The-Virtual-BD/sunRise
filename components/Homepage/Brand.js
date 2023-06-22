import React from 'react';
import verizon from "../../public/images/Brand/logo-verizon.svg"
import Image from 'next/image';

const Brand = () => {
    return (
        <div className='bg-white p-7 border-[1px] border-gray-300 '>
            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center gap-5 max-w-7xl mx-auto'>
                <img src={"/images/Brand/vbd.jpg"}  alt='brand' className='brand-image' />
                <img src={"/images/Brand/moth.jpg"} alt='brand' className='brand-image' />
                <img src={"/images/Brand/postal-logo.png"}  alt='brand' className='brand-image' />
                <img src={"/images/Brand/works.jpg"}  alt='brand' className='brand-image' />
                <img src={"/images/Brand/logo-nyse.svg"}  alt='brand' className='brand-image' />
                <img src={"/images/Brand/logo-point-one.png"} alt='brand' className='brand-image' />
            </div>
        </div>
    );
};

export default Brand;