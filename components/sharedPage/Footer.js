import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className=" bg-darkBg text-fontclr ">
			<div className="footer py-14 px-5 max-w-7xl mx-auto">
				<div>
					<span className="footer-title">Services</span>
					<Link href={"/service/software-development"}  className="link link-hover">Software Development</Link>
					<Link href={"/service/web-development"}  className="link link-hover">Web Development</Link>
					<Link href={"/service/branding"} className="link link-hover">Branding</Link>
					<Link href={"/service/research"} className="link link-hover">Research on Data Science Services</Link>
					<Link href={"/service/marketing"} className="link link-hover">Digital Marketing</Link>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<Link href={"/about-us"} className="link link-hover">About us</Link>
					<Link href={"/contacts"} className="link link-hover">Contact Us</Link>
					<Link href={"/services"} className="link link-hover">Services</Link>
					<Link href={"/our-work"} className="link link-hover">Our Work</Link>
					<Link href={"/latest-news"} className="link link-hover">Latest News</Link>
				</div>
				<div>
					<span className="footer-title">Social</span>
					<div className="grid grid-flow-col gap-4">
						

						<Link href={"https://www.youtube.com/@sunrisecommunications5314"}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</Link>
						
						<Link href={"https://www.facebook.com/Sunrise.ba.242"}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>

			<div className="footer footer-center p-3 px-5  bg-[#23303E] text-white">
				<div>
					<p>
						Copyright © 2023 - Developed By{" "}
						<a
							href="https://thevirtualbd.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="font-bold text-white hover:text-primary"
						>
							The Virtual BD
						</a>{" "}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
