import Link from "next/link";
import React from "react";
import { ourAchivment } from "../sharedPage/StaticData";
import { BsArrowRight } from "react-icons/bs";

const WhoWeAre = () => {
	return (
		<div className="text-paraclr py-14 px-5 ">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-paraclr text-3xl lg:text-5xl font-bold py-5">
					Who we are
				</h2>

				<p className="max-w-3xl ml-4 lg:ml-14 text-lg my-5">
					SunRise Communications (“SunCom”), is a 100% Bahamian owned company.
					Communications and technology are the core of many, if not all
					organizations. It is the key to productivity.
				</p>

				<p className="max-w-3xl ml-4 lg:ml-28 text-lg my-7">
					{" "}
					With the evolution of technology, products and services and how we do
					business SunRise is committed to ensuring that we are the number one
					leader in offering the advancements to The Bahamas.
				</p>

				<div className="ml-10 lg:ml-36 my-5 ">
					<ul>
						<li className="text-secondary font-bold text-sm lg:text-xl ">
							{" "}
							<Link href={"/about-us"} className="flex items-center gap-1">
								<BsArrowRight /> <span>About us </span>
							</Link>
						</li>
						<li className="text-secondary font-bold text-sm lg:text-xl ">
							{" "}
							<Link href={"/services"} className="flex items-center gap-1">
								<BsArrowRight /> <span>Our services</span>
							</Link>
						</li>
						<li className="text-secondary font-bold text-sm lg:text-xl ">
							{" "}
							<Link href={"/why"} className="flex items-center gap-1">
								<BsArrowRight /> <span>What makes us different</span>
							</Link>
						</li>
					</ul>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ml-10 lg:ml-36 mt-8">
					{ourAchivment.map((achi) => (
						<div key={achi.id}>
							<h3 className="text-3xl lg:text-6xl font-bold text-lightBg">
								{achi.title}
							</h3>
							<p className="text-sm lg:text-base font-semibold">
								{achi.subTitle}
							</p>
							<p className="text-sm lg:text-base font-semibold">
								{achi.subTitle2}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
