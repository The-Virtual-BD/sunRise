import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BenifitsData } from "../../sharedPage/StaticData";
import Form from "../../Homepage/Form";

const Why = () => {
	return (
		<div className="relative">
			<div className="why-banner-bg ">
				<div className="pt-60">
					<div className="flex items-center justify-start ">
						<h1 className="why-header-design">What sets us apart</h1>
					</div>
				</div>

				<div className=" max-w-7xl  mx-auto  relative top-24">
					<div className="bg-white text-darkBg px-20 pt-20 bg-silicon-mentality">
						<div className="w-full lg:w-1/2 ">
							<h2 className="text-2xl lg:text-4xl font-bold pb-5">
								Resources is our expertise
							</h2>

							<p className="text-sm lg:text-lg py-3">
								SunRise Communications is a distinguished company in The
								Bahamas, setting itself apart through its customer-centric
								approach, Bahamian ownership, access to resources, and
								commitment to advancement.{" "}
							</p>

							<p className="text-sm lg:text-lg py-3">
								With a deep understanding of the local market, SunRise focuses
								on addressing the unique needs of its clients, providing
								unmatched communication and advanced technological solutions.
							</p>

							<ul className="pt-5 pb-10">
								<li className="text-secondary font-bold text-base lg:text-xl ">
									{" "}
									<Link href={"/contacts"} className="flex items-center gap-1">
										<BsArrowRight /> <span>Your project proposal</span>
									</Link>
								</li>
								<li className="text-secondary font-bold text-base lg:text-xl ">
									{" "}
									<Link href={"/about-us"} className="flex items-center gap-1">
										<BsArrowRight /> <span>Our philosophy</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-darkBg  pb-10 px-5 lg:px-0">
				<div className="bg-[#F8F9FB] text-darkBg  flex flex-col lg:flex-row items-center justify-between gap-5  lg:max-w-7xl  mx-auto  relative top-24">
					<Image
						src={"/images/why-us/bg-img-02.jpg"}
						width={335}
						height={335}
						alt="bg"
					/>
					<div className="p-4 text-center lg:text-start">
						<h2 className="text-2xl lg:text-4xl font-bold pb-2">
							High performance teams
						</h2>
						<h3 className="text-xl lg:text-2xl font-semibold pb-2">
							who love their craft
						</h3>
						<p>
							At SunRise Communications, our team is the heart and soul of our
							company. We have assembled a highly skilled and dedicated group of
							professionals who are passionate about delivering exceptional
							results to our clients.{" "}
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center mt-20">
					<button className="bg-white  rounded-sm text-darkBg px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
						<Link href={"/"} className="flex items-center gap-1">
							<span>Learn more</span> <BsArrowRight />
						</Link>
					</button>
				</div>
			</div>

			<HowWeWork />
			<OurSpeciality />
			<Benifits />
			<Form />
		</div>
	);
};

export default Why;

const HowWeWork = () => {
	return (
		<div className="bg-[#F0F4F7] text-darkBg px-5">
			<div className="max-w-7xl mx-auto py-10 why-work-process">
				<div>
					<h2 className="text-2xl lg:text-4xl font-bold pb-5">
						How we work with clients
					</h2>

					<p className="text-sm lg:text-lg mb-4">
						We think the <b> why</b> is as important as the <b>what</b> —when
						working with our clients, we strive to understand the{" "}
						<b>business</b> and <b>technical</b> goals in addition to the more
						specific details.
					</p>

					<p className="text-sm lg:text-lg">
						Our Collaborative Approach: Partnering with Clients for Success
					</p>
				</div>

				<div className="mt-10 flex items-center justify-center">
					<div>
						<div className="py-10 px-10 bg-white max-w-[480px] ">
							<h2 className="text-2xl font-bold mb-3">Discover</h2>
							<p className="text-sm lg:text-lg max-w-2xl">
								We work to understand the goals and objectives for your project
								and organization. We then review the people, processes, and
								technologies used.
							</p>
						</div>

						<div className="flex ml:2 lg:ml-4">
							<svg
								width="66"
								height="66"
								viewBox="0 0 66 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1V55C1 60.5228 5.47715 65 11 65H65"
									stroke="#4DA687"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-dasharray="0.5 5"
								></path>
							</svg>

							<div className="py-14 px-10 bg-white max-w-[480px] mt-7 ">
								<h2 className="text-2xl font-bold mb-3">Plan</h2>
								<p className="text-sm lg:text-lg max-w-2xl">
									Based on the discovery phase, we craft a concrete technical
									plan for realizing the goals and objectives for your project.
								</p>
							</div>
						</div>

						<div className="flex ml-3 lg:ml-24">
							<svg
								width="66"
								height="66"
								viewBox="0 0 66 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1V55C1 60.5228 5.47715 65 11 65H65"
									stroke="#4DA687"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-dasharray="0.5 5"
								></path>
							</svg>

							<div className="py-14 px-10 bg-white max-w-[480px]  mt-7 ">
								<h2 className="text-2xl font-bold mb-3">Start</h2>
								<p className="text-sm lg:text-lg max-w-2xl">
									The first dedicated software development team starts working
									with your organization to realize project goals and
									objectives.
								</p>
							</div>
						</div>

						<div className="flex ml-4 lg:ml-44">
							<svg
								width="66"
								height="66"
								viewBox="0 0 66 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1V55C1 60.5228 5.47715 65 11 65H65"
									stroke="#4DA687"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-dasharray="0.5 5"
								></path>
							</svg>

							<div className="py-14 px-10 bg-white max-w-[480px]  mt-7 ">
								<h2 className="text-2xl font-bold mb-3">Iterate</h2>
								<p className="text-sm lg:text-lg max-w-2xl">
									We gather feedback on what is working well and what can be
									improved, both within our teams and within your organization.
								</p>
							</div>
						</div>

						<div className="flex ml-5 lg:ml-64">
							<svg
								width="66"
								height="66"
								viewBox="0 0 66 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1V55C1 60.5228 5.47715 65 11 65H65"
									stroke="#4DA687"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-dasharray="0.5 5"
								></path>
							</svg>

							<div className="py-14 px-10 bg-white max-w-[480px]  mt-7 ">
								<h2 className="text-2xl font-bold mb-3">Scale</h2>
								<p className="text-sm lg:text-lg max-w-2xl">
									For increased software delivery velocity, add dedicated teams
									as needed.
								</p>
							</div>
						</div>

						<div className="flex ml-6 lg:ml-96">
							<svg
								width="66"
								height="66"
								viewBox="0 0 66 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1V55C1 60.5228 5.47715 65 11 65H65"
									stroke="#4DA687"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-dasharray="0.5 5"
								></path>
							</svg>

							<div className="py-14 px-10 bg-white max-w-[480px]  mt-7 ">
								<h2 className="text-2xl font-bold mb-3">Support</h2>
								<p className="text-sm lg:text-lg max-w-2xl">
									We take great pride in our work, supporting the codebase and
									infrastructure behind systems we&apos;ve developed.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const OurSpeciality = () => {
	return (
		<div className="bg-we-deifferent text-white py-14 lg:py-24 flex items-center justify-center">
			<div className="max-w-7xl mx-auto relative">
				<h2 className="text-xl lg:text-4xl font-extrabold pb-5 px-5">
					How we&apos;re different from the competition
				</h2>

				<div className="bg-gradient-to-r from-[#466e94] to-[#3f8c67] p-10 rounded-md  relative">
					<p className="text-sm lg:text-xl font-semibold our-speciality-text-bg px-5 lg:px-20 py-8">
						When a consultancy and software development capability are under one
						roof, better decisions are made, maintenance costs are reduced, and
						software is delivered at a higher velocity.
					</p>
				</div>

				<div className="why-ceo-desc flex items-center justify-end gap-2 mt-4">
					<Image
						src={"/images/why-us/img-author-02.jpg"}
						alt="author"
						width={56}
						height={56}
						className="rounded-full"
					/>
					<div>
						<h3 className="text-xl font-bold">Eli Kozik</h3>
						<p className="text-sm">CTO, SiliconMint</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Benifits = () => {
	return (
		<div className="bg-[#F0F4F7] text-darkBg ">
			<div className="max-w-7xl mx-auto py-10 px-5">
				<div>
					<h2 className="text-2xl lg:text-5xl font-bold pb-5">
						Benefits of working with us
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
						{BenifitsData.map((cardData) => (
							<div
								class={`card`}
								style={{ backgroundImage: `url(${cardData.img})` }}
								key={cardData.id}
							>
								<div class="content">
									<h2 class="title uppercase">{cardData.title}</h2>
									<p class="copy">{cardData.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div>
				<div className="bg-darkBg py-10 ">
					<h2 className="text-2xl lg:text-5xl font-bold  text-white max-w-7xl mx-auto px-5">
						Our philosophy
					</h2>
				</div>
				<div className="bg-[#F8F9FB]  ">
					<div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-14">
						<img src="/images/img-ikigai.svg" alt="" srcset="" />

						<div className="ikigai-container">
							<p className="ikigai-text">
								Ikigai happens when what you&apos;re good at overlaps with what
								you love and what the world needs
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white ">
				<div className="max-w-7xl mx-auto py-14 px-5">
					<h2 className="text-2xl lg:text-5xl font-bold pb-3">
						High performance teams have high ikigai
					</h2>
					<h3 className="text-xl lg:text-3xl font-bold text-greenclr">
						experienced people + love their work = productive
					</h3>

					<p className="text-sm lg:text-base my-5">
						When you assemble a team with high ikigai, magic happens.
						Experienced people who love their work are productive, tasks are
						done with high fidelity, and decisions are made with care.
					</p>

					<p className="text-sm lg:text-base">
						At SunRise, this is the foundation of how we assemble engineering
						teams: people who are deeply technical, love what they do, and have
						a passion for the craft of programming itself.
					</p>
				</div>
			</div>

			<div className="bg-we-deifferent text-white py-24 flex items-center justify-center">
				<div className="max-w-7xl mx-auto relative">
					<h2 className="text-center text-xl mb-2">
						Unlocking the Power of Small Teams
					</h2>

					<div className=" ikigai-container">
						<p className=" ikigai-text">
							
							Success is not solely determined by the size of a team.
							At our company, 
							<span className="text-greenclr">
								we firmly believe that greatness can be achieved through the
								power of small teams.
							</span>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
