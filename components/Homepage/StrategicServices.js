import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const StrategicServices = () => {
    return (
        <div className='text-paraclr py-20 px-5 '>
            <div className='max-w-7xl mx-auto'>
                <span className='header-design'>
                    Strategic services
                </span>

                <p className='max-w-3xl ml-1 lg:ml-5 text-sm lg:text-lg  my-5 mt-10'>The strategic services of our custom software development company focus on the why and the how, while our implementation services focus on getting the what done as efficiently as possible with high craftsmanship and quality.</p>

                <div>
                    {/* Card-1 */}
                    <div className='bg-white max-w-6xl text-paraclr  rounded-sm ml-1 lg:ml-5'>
                        <div className='flex flex-col lg:flex-row gap-1  items-center justify-between'>
                            <div className="  text-start max-w-3xl p-5 lg:p-10">
                                <h2 className="text-xl lg:text-3xl font-bold mb-4 ">Consulting & IT strategy</h2>
                                <p className='text-sm lg:text-base'>Lean on our decades of IT experience to define, implement, and monitor a strategy to cover all aspects of digital transformation. From analysis to architecture, to implementation, to support, and even training, we have the expertise to help you succeed.</p>


                                <div className='ml-5 my-3 border-l-2 border-green-500 pl-3'>
                                    <ul>
                                        <li className='text-secondary font-bold text-base lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                                            <BsArrowRight /> <span>Advisory services</span>
                                        </Link></li>
                                        <li className='text-secondary font-bold text-base lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                                            <BsArrowRight /> <span>All case studies</span>
                                        </Link></li>
                                    </ul>
                                </div>
                            </div>

                            <figure><img src="/images/bg-si-01.jpg" alt="Movie" /></figure>
                        </div>
                    </div>



                    {/* Card-2 */}
                    <div className='bg-white max-w-6xl text-paraclr  rounded-sm ml:2 lg:ml-8 my-10'>
                        <div className='flex flex-col lg:flex-row gap-1 items-center justify-between'>
                            <div className="  text-start max-w-3xl p-10">
                                <h2 className="text-xl lg:text-3xl font-bold mb-4 ">Software project rescue</h2>
                                <p className='text-sm lg:text-base'>Benefit from our deep technical expertise to perform a rapid assessment of a project&apos;s current 360-degree status. We&apos;ll provide a plan for getting things back on track, with or without our implementation services.</p>


                                <div className='ml-5 my-3 border-l-2 border-green-500 pl-3'>
                                    <ul>
                                        <li className='text-secondary font-bold text-base lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                                            <BsArrowRight /> <span>Technical assessments</span>
                                        </Link></li>
                                        <li className='text-secondary font-bold text-base lg:text-xl '> <Link href={"/"} className='flex items-center gap-1'>
                                            <BsArrowRight /> <span>Project rescue</span>
                                        </Link></li>
                                    </ul>
                                </div>
                            </div>

                            <figure><img src="/images/bg-si-02.jpg" alt="Movie" /></figure>
                        </div>
                    </div>


                    {/* Card-3 */}
                    <div className='bg-white max-w-6xl  text-paraclr  rounded-sm ml-2 lg:ml-14 my-10'>
                        <div className='flex flex-col lg:flex-row gap-1 items-center justify-between'>
                            <div className="  text-start max-w-3xl p-10">
                                <h2 className="text-xl lg:text-3xl font-bold mb-4 ">Process engineering & DevOps automation</h2>
                                <p className='text-sm lg:text-base'>Gain from our experience across hundreds of projects. Optimize human and technical workflows with process engineering and DevOps automation. Keep developers happy and loyal while shipping software at high velocity without sacrificing quality.</p>
                            </div>

                            <figure><img src="/images/bg-si-04.jpg" alt="Movie" className='h-[300px] w-full lg:h-[387px]' /></figure>
                        </div>
                    </div>


                    {/* Card-4 */}
                    <div className='bg-white max-w-6xl text-paraclr  rounded-sm ml-2 lg:ml-20 my-10'>
                        <div className='flex flex-col lg:flex-row gap-1 items-center justify-between'>
                            <div className="  text-start max-w-3xl p-10">
                                <h2 className="text-xl lg:text-3xl font-bold mb-4 ">Cloud services</h2>
                                <p className='text-sm lg:text-base'>Lessons learned from thousands of deployments across hundreds of projects yield one thing—the experience and know-how to design the right architecture is always a tradeoff between speed, cost, efficiency, in-house skill sets, product roadmaps, and a host of other factors. An NP-hard problem, we thrive on delivering optimal results in the field of cloud architecture, design, implementation, monitoring, training, and support.</p>
                            </div>

                            <figure><img src="/images/bg-si-01.jpg" alt="Movie" /></figure>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
                        <Link href={"/services"} className='flex items-center gap-1'>
                            <span>All services</span> <BsArrowRight />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StrategicServices;