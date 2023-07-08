import React from 'react';
import Form from '../../Homepage/Form';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Feedbacks from '../Services/Feedbacks';
import Blogs from '../../Homepage/Blogs';

const Contacts = () => {
    return (
        <div>
            <ContactBanner />
            <ContactLocation />
            <Feedbacks />
            <Blogs />

        </div>
    );
};

export default Contacts;


const ContactBanner = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/contact/bg-top-contacts.jpg")`,
            boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)"
        }} className="   flex items-center slider-bg relative">
            <div className='  max-w-7xl mx-auto w-full'>

                <div className='flex flex-col lg:flex-row items-center justify-center rounded-sm h-auto lg:h-[600px] overflow-hidden relative top-0 lg:top-60 w-full border-l-0  lg:border-l-4 border-l-darkgreen'>

                    <div className=' w-full bg-transparent  lg:bg-white text-white  lg:text-darkBg h-auto lg:h-[600px] '>
                        <div className='pt-14 px-5 relative '>
                            <h1 className="text-2xl lg:text-5xl font-bold my-2">Our offices</h1>


                            <div className='relative top-32'>
                                <div className='flex justify-between items-start gap-5'>
                                    <div >
                                        <h3 className='text-2xl font-semibold'>The Bahamas</h3>
                                        <p className='text-sm lg:text-base'>#81 School Lane and  Dowdeswell Street <br /> Nassau, The Bahamas</p>
                                        <p className='text-sm lg:text-base'>1-242-698-1565 / 1-242-808-1561</p>
                                        <p className='text-sm lg:text-base'>customercare@sunrise-bahamas.net</p>
                                    </div>
                                    <Image src={"/images/contact/bg-img-01.jpg"} alt={"form"} width={204} height={456} className='hidden lg:block' />
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className='  w-full h-[600px] my-20 lg:my-0 relative top-32 lg:top-0  px-10 lg:px-0'>
                        <div className='text-paraclr py-14 px-5 blog-content bg-opacity-10  '>
                            <div className='max-w-4xl mx-auto'>
                                <div className='flex items-center gap-5 justify-center mb-10'>
                                    <Image src={"/images/contact/icon-form-message.svg"} alt={"form"} width={65} height={65} />
                                    <h2 className='text-2xl lg:text-5xl font-bold text-white'>Send us a message</h2>

                                </div>

                                <form action="" className='text-base lg:text-xl'>
                                    <textarea
                                        className="textarea textarea-accent w-full h-40 border-0 mb-4 bg-formclr"
                                        placeholder="Project description*">
                                    </textarea>

                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        className="input  input-accent w-full mb-4 border-0 bg-formclr" />

                                    <div className='flex flex-col lg:flex-row items-center gap-2 mb-4'>
                                        <input
                                            type="email"
                                            placeholder="Email*"
                                            className="input  input-accent w-full border-0 bg-formclr" />

                                        <input
                                            type="tel"
                                            placeholder="Phone (optional)"
                                            className="input input-accent w-full border-0 bg-formclr" />
                                    </div>

                                    <div className='flex items-center '>
                                        <button className="bg-yellow-500 hover:bg-yellow-400 rounded-sm text-black  px-6 lg:px-10 py-1.5 lg:py-3 font-semibold text-lg lg:text-2xl mt-10 flex items-center gap-1">
                                            <span> Submit</span> <BsArrowRight />
                                        </button>
                                    </div>


                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
};



const ContactLocation = () => {
    return (
        <div className='h-auto lg:h-[100vh] bg-[#F0F4F7] '>

            <div className='max-w-7xl mx-auto px-5 lg:px-0 mt-40 lg:mt-0 py-20 lg:py-48'>

                <div>
                    <div className='flex justify-between bg-white shadow-sm  mb-10 border-l-4 border-l-darkgreen '>

                        <div className='w-full lg:w-1/2 h-full flex items-center justify-between gap-2  '>
                            <div className='p-5'>
                                <h3 className='text-2xl font-semibold'>The Virtual BD</h3>
                                <p className='text-sm lg:text-base'>Home 315, Road 3, Phase 2, Sonadanga R/A,
                                    Khulna 9100, Bangladesh.</p>

                                <p className='text-sm lg:text-base'>+880 1902-624501</p>

                                <p className='text-sm lg:text-base'>contact@thevirtualbd.com</p>
                            </div>
                           {/*  <div>
                                <img src="/images/contact/bg-img-02.jpg" alt="" srcset="" className='h-full' />
                            </div> */}
                        </div>

                        <div className='w-full lg:w-1/2 h-full hidden lg:block'>
                            {/* <img src="/images/contact/bg-img-03.jpg" alt="" srcset="" /> */}

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8384567346728!2d89.54328359197726!3d22.818265001859178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bd89294df9f%3A0xf7219ca732219803!2sThe%20Virtual%20BD!5e0!3m2!1sen!2sbd!4v1688800416546!5m2!1sen!2sbd"  height="420" className='w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
};