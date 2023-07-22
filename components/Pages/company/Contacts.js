import React from "react";
import Form from "../../Homepage/Form";
import { BsArrowRight, BsFillEnvelopeFill } from "react-icons/bs";
import Image from "next/image";
import Feedbacks from "../Services/Feedbacks";
import Blogs from "../../Homepage/Blogs";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";

const Contacts = () => {
	return (
		<div>
			<ContactBanner />
			<ContactLocation />
			{/* <Feedbacks /> */}
			<Blogs />
		</div>
	);
};

export default Contacts;

const ContactBanner = () => {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/contact/bg-top-contacts.jpg")`,
				boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
			}}
			className="   flex items-center slider-bg relative"
		>
			<div className="  max-w-7xl mx-auto w-full">
				<div className="flex flex-col lg:flex-row items-center justify-center rounded-sm h-auto lg:h-[500px] overflow-hidden relative top-0 lg:top-60 w-full border-l-0  lg:border-l-4 border-l-darkgreen">
					<div className=" w-full bg-transparent  lg:bg-white text-white  lg:text-darkBg h-auto lg:h-[600px] ">
						<div className="pt-14 px-5 relative ">
							<h1 className="text-2xl lg:text-5xl font-bold my-2">
								Our Head office
							</h1>

							<div className="relative top-32">
								<div className="flex justify-between items-start gap-5">
									<div>
										<h3 className="text-2xl font-semibold">SunRise</h3>
										<p className="text-sm lg:text-base flex items-center gap-1 mt-2">
											<FaLocationArrow className="text-xl" />
											<span>
												#81 School Lane and Dowdeswell Street Nassau, The
												Bahamas
											</span>
										</p>
										<p className="text-sm lg:text-base flex items-center gap-1 my-1">
											<AiFillPhone className="text-xl" />
											<span>1-242-698-1565 </span>
										</p>

										<p className="text-sm lg:text-base flex items-center gap-1 my-1">
											<BiMobile className="text-xl" />
											<span>1-242-808-1561</span>
										</p>
										<p className="text-sm lg:text-base flex items-center gap-1">
											<BsFillEnvelopeFill className="text-xl" />
											<span>customercare@sunrise-bahamas.net</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="  w-full h-[500px] my-20 lg:my-0 relative top-32 lg:top-0  px-10 lg:px-0">
						<div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.752082517008!2d-77.33748672543814!3d25.076390636584755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7df5c609022d%3A0x5eb6bbd1cf933c36!2sSunRise%20Communications!5e0!3m2!1sen!2sus!4v1689069760250!5m2!1sen!2sus"
								height="500"
								className="w-full"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const ContactLocation = () => {
	return (
		<div className="h-auto  bg-[#F0F4F7] text-darkBg ">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 mt-40 lg:mt-0 py-20 lg:py-48">
				<div>
					<div className="flex flex-col lg:flex-row items-start justify-between bg-white shadow-sm mt-5  mb-10 border-l-4 border-l-darkgreen ">
						<div className="w-full lg:w-1/2 h-full  gap-2  ">
							<h1 className="text-2xl lg:text-4xl font-bold  p-5">
								Our Affiliate office
							</h1>
							<div className="p-5">
								<h3 className="text-2xl font-semibold">The Virtual BD</h3>

								<p className="text-sm lg:text-base flex items-center gap-1 mt-2">
									<FaLocationArrow className="text-xl" />
									<span>
										Home 315, Road 3, Phase 2, Sonadanga R/A, Khulna 9100,
										Bangladesh.
									</span>
								</p>

								<p className="text-sm lg:text-base flex items-center gap-1 my-1">
									<AiFillPhone className="text-xl" />
									<span>+880 1902-624501</span>
								</p>

								<p className="text-sm lg:text-base flex items-center gap-1">
									<BsFillEnvelopeFill className="text-xl" />
									<span>contact@thevirtualbd.com</span>
								</p>
							</div>
						</div>

						<div className="w-full lg:w-1/2 h-full ">
							{/* <img src="/images/contact/bg-img-03.jpg" alt="" srcset="" /> */}

							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8384567346728!2d89.54328359197726!3d22.818265001859178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bd89294df9f%3A0xf7219ca732219803!2sThe%20Virtual%20BD!5e0!3m2!1sen!2sbd!4v1688800416546!5m2!1sen!2sbd"
								height="420"
								className="w-full"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
				<Form />
			</div>
		</div>
	);
};
