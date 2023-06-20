import React from 'react';
import { blogs } from '../sharedPage/StaticData';
import Image from 'next/image';

const Blogs = () => {
    return (
        <div className='text-paraclr '>
            <div className=''>
                <div className=' blog-title py-10  px-5'>
                    <h2 className='max-w-7xl mx-auto text-start text-3xl lg:text-5xl font-bold text-white'>Latest news & insights</h2>
                </div>
                <div className='blog-content py-14'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-5'>
                        {
                            blogs.map(blog => <div key={blog.id} className='bg-white rounded-md'>
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
        </div>
    );
};

export default Blogs;


{/* <div key={blog.id} className="card card-compact w-96 bg-base-100 text-paraclr">
    <figure><img src={blog.img} alt={blog.title} /></figure>

    <div className="text-paraclr text-start py-4">
        <h2 className="card-title">{blog.title}</h2>
        <p>{blog.details}</p>
    </div>
</div> */}