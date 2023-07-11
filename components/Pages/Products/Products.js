import React from 'react';

const Products = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/banner/img-slider-03.png")`,
                boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)"
            }} className="  text-white flex items-center slider-bg">


                <div className=' '>
                    <div className="text-start mb-10 px-5 lg:px-24 ">
                        <div className='flex items-center justify-start '>
                            <h1 className='why-header-design'>Our Products</h1>
                        </div>
                        <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">Passionate & driven</h1>
                        <h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">software development + consulting</h3>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;