import Image from 'next/image';
import React from 'react';
import { blogs, blogse } from '../../sharedPage/StaticData';

const News = () => {
    return (
        <div>
            <NewsBanner />
            <LatestNews />

        </div>
    );
};

export default News;


const NewsBanner = () => {
    return (
        <div style={{
            backgroundImage: ` url("/images/news/bg-top-blogroot.jpg")`
        }} className="  text-white flex items-center top-header-bg">

            <div className=' '>
                <div className="text-start mb-10 px-5 lg:px-24 ">
                    <div className='flex items-center justify-start '>
                        <h1 className='why-header-design'>Our Latest News</h1>
                    </div>
                    {/* <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">Passionate & driven</h1> */}
                    <h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">Recent articles and expert opinions from Sunrise</h3>

                </div>
            </div>
        </div>
    )
};



const LatestNews = () => {
    return (
        <div className='bg-[#F8FAFB] py-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  px-5 lg:px-0 place-items-center'>
                    {
                        blogse.map(blog => <div key={blog.id} className='bg-white rounded-md shadow-xl'>
                            <Image src={blog.img} alt={blog.title} layout="responsive" className='rounded-t-md'
                                width={100}
                                height={100}
                                style={{ width: '100%' }} />
                            <div className='p-7'>
                                <h2 className='text-xl lg:text-2xl font-bold text-darkBg hover:text-secondary cursor-pointer my-2 '>{blog.title}</h2>
                                <p className='text-sm lg:text-base'>{blog.details}</p>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    )
};