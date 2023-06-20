import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [navbarTop, setNavbarTop] = useState(true);
	// console.log(router.pathname);

	const memuItems = [
		{ name: "Home", path: "/" },
		{ name: "Why", path: "/why" },
		{ name: "Services", path: "/services" },
		{ name: "Our Work", path: "/our-work" },
		{ name: "Products", path: "/products" },
		{ name: "Company", path: "/company" },
	];
	const isActive = (path) => router.pathname === path;

	//Check Scroll Position
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset === 0) {
				setNavbarTop(true);
			} else {
				setNavbarTop(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<div
				className={`bg-darkBg w-full  fixed z-50 ease-in duration-300 ${navbarTop ? " bg-opacity-100 lg:bg-opacity-0" : "bg-opacity-100"
					}`}
			>
				<header className="flex items-center  justify-between max-w-7xl mx-auto ">
					<button
						onClick={() => setOpen(!open)}
						className="block lg:hidden mt-2 lg:mt-0 px-6"
					>
						{!open ? (
							<AiOutlineMenu className="text-3xl text-white" />
						) : (
							<AiOutlineClose className="text-3xl text-white" />
						)}
					</button>

					<Link href={"/"}>
						{/* <Image
						src={"/assets/authbrain.png"}
						width={164}
						height={40}
						alt="logo"
					/> */}
						<h2 className="text-2xl font-bold text-white text-uppercrease"> SILLICOVALLEY</h2>
					</Link>

					<nav class="stroke">
						<ul className="hidden  lg:flex lg:flex-row justify-between items-center gap-5 text-lg ">
							{memuItems.map((item, index) => (
								<li key={index}>
									<Link
										href={item.path}
										className={`${isActive(item.path)
											? "active text-primary"
											: "text-fontclr"
											}`}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>

				{open ? (
					<div className="bg-darkBg  text-white rounded w-full  pl-3  py-5 z-10 fixed ">
						<nav class="stroke">
							<ul
								className=" lg:hidden flex flex-col items-start  px-5 w-full"
								onClick={() => setOpen(!open)}
							>
								{memuItems.map((item, index) => (
									<li key={index}>
										<Link
											href={item.path}
											className={`${isActive(item.path)
												? "active text-primary"
												: "text-fontclr"
												}`}
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				) : null}
			</div>


		</div>
	);
};

export default Header;
