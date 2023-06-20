import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { bannerSlideData } from "../sharedPage/StaticData";
import Brand from "./Brand";

const Banner2 = () => {
	return (
		<div>
			<div >
				<Swiper
					loop={true}
					// grabCursor={true}
					navigation={true}
					pagination={{
						clickable: true,
					}}

					autoplay={{
						delay: 3500,
						disableOnInteraction: true,
					}}
					slidesPerView={1}
					slidesPerGroup={1}
					modules={[Pagination, Autoplay, Navigation]}
					className="mySwiper"
				>
					{bannerSlideData.map((singleData) => (
						<SwiperSlide key={singleData.id}>
							<BannerSlide singleData={singleData} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<Brand />
		</div>
	);
};

export default Banner2;

const BannerSlide = ({ singleData }) => {
	const { id, title, subTitle, desc, img, btnText } = singleData;
	return (
		<div style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${img})`,
			boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)"
		}}
		
			className="slider-bg flex items-center justify-center text-white">
			<div className="text-start mb-10 px-5 ">
				<h1 className="text-2xl lg:text-5xl font-bold max-w-5xl">{title}</h1>
				<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">{subTitle}</h3>
				<p className="bg-darkBg bg-opacity-50 px-3 py-7 rounded-md max-w-4xl text-sm lg:text-base">{desc}</p>

				<button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-5 lg:px-10 py-2 lg:py-3 text-bold text-xl lg:text-2xl mt-10">{btnText}</button>

			</div>

		</div>
	);
};
