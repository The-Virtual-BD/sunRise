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
		{
			name: "Company",
			path: "/about-us",
			sub1Menu: {
				name: "About",
				path: "/about-us",
			},
			sub2Menu: {
				name: "News",
				path: "/about-us",
			},
		},
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



	{/* <li>
		<details open>
			<summary>Parent item</summary>
			<ul>
				<li><a>level 2 item 1</a></li>
				<li><a>level 2 item 2</a></li>
			</ul>
		</details>
	</li> */}

	return (
		<div>
			<div
				className={`bg-[#ffffff] w-full  fixed z-50 ease-in  duration-300 ${navbarTop ? " bg-opacity-100 lg:bg-opacity-0" : "bg-opacity-100"
					}`}
			>
				<header className="flex items-center  justify-between max-w-7xl mx-auto py-1.5 max-h-20">

					{/* Open & Close Button */}
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


					{/* Logo */}
					<Link href={"/"}>
						<Image
							src={"/images/logo.png"}
							width={164}
							height={40}
							alt="logo"
						/>
						{/* <h2 className="text-2xl font-bold text-white text-uppercrease"> SILLICOVALLEY</h2> */}
					</Link>

					{/* Navbar */}
					<nav class="stroke ml-5">
						<ul className="hidden  lg:flex lg:flex-row justify-between items-center gap-2 text-xl z-100">
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

							

							{/* <li>
								<details close>
									<summary>Company</summary>
									<ul>
										<li><a>About Us</a></li>
										<li><a>Latest News</a></li>
										<li><a>Contact Us</a></li>
									</ul>
								</details>
							</li> */}
						</ul>
					</nav>

					<button className="bg-primary  rounded-sm text-darkBg px-5 lg:px-6 py-1.5 lg:py-2 font-bold text-lg lg:text-xl ">Get in touch</button>
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
