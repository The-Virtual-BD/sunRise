import React from 'react';
import { feedbacksData } from '../../sharedPage/StaticData';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Autoplay, Navigation } from "swiper";

const Feedbacks = () => {
    return (
        <div className='bg-[#F8FAFB] text-darkBg '>
            <div className='max-w-7xl mx-auto py-14 px-5 lg:px-0'>
                <h2 className='text-2xl lg:text-5xl font-bold '>Client feedback</h2>

                <div className=' my-8'>
                    <Swiper
                        effect={"coverflow"}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        // slidesPerGroup={1}
                        loop={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        navigation={true}

                        /*   breakpoints={{
                              299: {
                                  slidesPerView: 1,
                              },
  
                              640: {
                                  slidesPerView: 1,
  
                              },
                              768: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                              },
                              1024: {
                                  slidesPerView: 1,
                                  spaceBetween: 30,
                              },
                          }} */
                        modules={[EffectCoverflow, Autoplay, Navigation]}
                        className="mySwiper  my-10 "
                    >
                        {
                            feedbacksData.map(feed => <SwiperSlide key={feed.id} > <FeedbackCard feed={feed} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Feedbacks;



const FeedbackCard = ({ feed }) => {
    const { name, designation, company, companyLogo, comment, img } = feed
    return (
        <div className='bg-white flex items-center gap-4 shadow-xl rounded-sm w-full lg:max-w-4xl my-10'>

            <div className='flex flex-col items-center gap-4 bg-[#F8FAFB] w-2/6 h-full p-3 lg:p-5'>
                <Image src={img} alt={name} width={246} height={246} className='rounded-full' />
                <div className='text-center'>
                    <h2 className='text-base lg:text-2xl font-semibold'>{name}</h2>
                    <h3 className='text-sm lg:text-lg'>{designation}</h3>
                </div>
            </div>


            <div className='w-4/6 p-2 lg:p-5 text-start   '>
                <div>
                    <Image src={companyLogo} alt={name} width={108} height={48} />
                    <h2 className='text-lg lg:text-2xl font-semibold mt-2 lg:mt-4 mb-3'>{company}</h2>
                </div>

                <hr />

                <div className='text-container text-sm lg:text-base mt-5'>
                    <p>{comment}</p>
                </div>



            </div>

        </div>
    )
};