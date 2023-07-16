import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const StrategicServices = () => {
	return (
		<div className="text-paraclr py-20 px-5 ">
			<div className="max-w-7xl mx-auto">
				<span className="header-design">Our IT Services</span>

				<p className="max-w-3xl ml-1 lg:ml-5 text-sm lg:text-lg  my-5 mt-10">
					As the old adage goes, `&quot;Measure twice, cut once,&ldquo; we understand the
					importance of precision and accuracy in our work. Therefore, our
					services are divided into two distinct categories: web development and
					software development.
				</p>

				<div>
					{/* Card-1 */}
					<div className="bg-white max-w-6xl text-paraclr  rounded-sm ml-1 lg:ml-5">
						<div className="flex flex-col lg:flex-row gap-1  items-center justify-between">
							<div className="  text-start max-w-3xl p-5 lg:p-10">
								<h2 className="text-xl lg:text-3xl font-bold mb-4 ">
									Software Development
								</h2>

								<p className="text-sm lg:text-base">
									Our software development services cater to businesses of all
									sizes, providing tailored solutions to streamline operations
									and boost efficiency. Our experienced team of software
									engineers utilizes the latest technologies to develop scalable
									and robust applications that meet your specific requirements.
									Whether you need a custom CRM system, inventory management
									software, or an enterprise solution, we have the expertise to
									deliver reliable and high-performing software solutions.
								</p>

								<div className="ml-5 my-3 border-l-2 border-green-500 pl-3">
									<ul>
										<li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/contacts"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Let&lsquo;s talk</span>
											</Link>
										</li>
										<li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/why"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Why we are</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<figure>
								<img src="/images/bg-si-01.jpg" alt="Movie" />
							</figure>
						</div>
					</div>

					{/* Card-2 */}
					<div className="bg-white max-w-6xl text-paraclr  rounded-sm ml:2 lg:ml-8 my-10">
						<div className="flex flex-col lg:flex-row gap-1 items-center justify-between">
							<div className="  text-start max-w-3xl p-10">
								<h2 className="text-xl lg:text-3xl font-bold mb-4 ">
									Web Development{" "}
								</h2>

								<p className="text-sm lg:text-base">
									At our IT company, we specialize in web development, creating
									custom websites that elevate your online presence and drive
									business growth. Our team of skilled web developers combines
									technical expertise with creative flair to deliver visually
									stunning and highly functional websites that captivate your
									audience.
								</p>

								<div className="ml-5 my-3 border-l-2 border-green-500 pl-3">
									<ul>
										<li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/services"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Know more</span>
											</Link>
										</li>
										{/* <li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Project rescue</span>
											</Link>
										</li> */}
									</ul>
								</div>
							</div>

							<figure>
								<img src="/images/bg-si-02.jpg" alt="Movie" />
							</figure>
						</div>
					</div>

					{/* Card-3 */}
					<div className="bg-white max-w-6xl  text-paraclr  rounded-sm ml-2 lg:ml-14 my-10">
						<div className="flex flex-col lg:flex-row gap-1 items-center justify-between">
							<div className="  text-start max-w-3xl p-10">
								<h2 className="text-xl lg:text-3xl font-bold mb-4 ">
									Branding
								</h2>
								<p className="text-sm lg:text-base">
									Building a strong brand identity is crucial for success in
									today&apos;s competitive market. Our branding services
									encompass creating unique brand strategies, designing
									captivating logos, crafting compelling brand messaging, and
									developing cohesive visual elements. We work closely with you
									to understand your target audience, values, and business
									goals, ensuring that your brand stands out and resonates with
									your customers.
								</p>


                                <div className="ml-5 my-3 border-l-2 border-green-500 pl-3">
									<ul>
										<li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/services"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Read more</span>
											</Link>
										</li>
										
									</ul>
								</div>
							</div>

							<figure>
								<img
									src="/images/bg-si-04.jpg"
									alt="Movie"
									className="h-[300px] w-full lg:h-[387px]"
								/>
							</figure>
						</div>
					</div>

					{/* Card-4 */}
					<div className="bg-white max-w-6xl text-paraclr  rounded-sm ml-2 lg:ml-20 my-10">
						<div className="flex flex-col lg:flex-row gap-1 items-center justify-between">
							<div className="  text-start max-w-3xl p-10">
								<h2 className="text-xl lg:text-3xl font-bold mb-4 ">
									Research on Data Science Services
								</h2>
								<p className="text-sm lg:text-base">
									As a leading IT company, we are at the forefront of data
									science research and offer comprehensive data science services
									to help businesses harness the power of data for informed
									decision-making and strategic planning. Our team of data
									scientists and analysts are passionate about exploring
									cutting-edge methodologies and technologies to extract
									valuable insights from complex datasets.
								</p>
                                <div className="ml-5 my-3 border-l-2 border-green-500 pl-3">
									<ul>
										<li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/services"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Know more</span>
											</Link>
										</li>
										
									</ul>
								</div>
							</div>

							<figure>
								<img src="/images/bg-si-01.jpg" alt="Movie" />
							</figure>
						</div>
					</div>

					{/* Card-5 */}
					<div className="bg-white max-w-6xl text-paraclr  rounded-sm ml-2 lg:ml-24 my-10">
						<div className="flex flex-col lg:flex-row gap-1 items-center justify-between">
							<div className="  text-start max-w-3xl p-10">
								<h2 className="text-xl lg:text-3xl font-bold mb-4 ">
									Digital Marketing
								</h2>
								<p className="text-sm lg:text-base">
									In the digital age, a strong online presence is essential for
									business growth. Our digital marketing services encompass a
									wide range of strategies to help you reach and engage your
									target audience. From search engine optimization (SEO) to
									social media marketing, pay-per-click (PPC) advertising, and
									content marketing, we develop comprehensive digital marketing
									campaigns that drive traffic, generate leads, and increase
									conversions.
								</p>
                                <div className="ml-5 my-3 border-l-2 border-green-500 pl-3">
									<ul>
										<li className="text-secondary font-bold text-base lg:text-xl ">
											{" "}
											<Link href={"/services"} className="flex items-center gap-1">
												<BsArrowRight /> <span>Read more</span>
											</Link>
										</li>
										
									</ul>
								</div>
							</div>

							<figure>
								<img src="/images/bg-si-01.jpg" alt="Movie" />
							</figure>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
						<Link href={"/services"} className="flex items-center gap-1">
							<span>All services</span> <BsArrowRight />
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default StrategicServices;
