import React from 'react';
// import '../../../styles/services.css';

const ServiceBanner = () => {
    return (
        <div
            className=" service-banner flex items-center   text-white h-[50vh] lg:h-[100vh]">
            <div className='max-w-7xl mx-auto'>
                <div className="text-start mb-10 px-5 lg:px-0 mt-10 lg:mt-0 ">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-2">IT consulting services</h1>
                    <h3 className="text-base lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">An award-winning IT consulting company, SiliconMint sets itself apart by the technical depth and breadth of its staff. Deeply rooted in the Silicon Valley tradition, our IT consulting services drive digital transformation for organizations worldwide.</h3>

                    <button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-5 lg:px-10 py-2 lg:py-3 text-bold text-xl lg:text-2xl mt-4">Let&apos;s work togather</button>

                </div>


            </div>

        </div>
    );
};

export default ServiceBanner;