import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [navbarTop, setNavbarTop] = useState(true);

	const menuItems = [
		{ name: "Home", path: "/" },
		{ name: "Why", path: "/why" },
		{ name: "Services", path: "/services" },
		{ name: "Our Work", path: "/our-work" },
		{ name: "Products", path: "/products" },
		// { name: "Dashboard", path: "/dashboard" },
		{
			name: "Company",
			path: "/about-us",
			subMenuItems: [
				{ name: "About Us", path: "/about-us" },
				{ name: "News", path: "/latest-news" },
				{ name: "Our Team", path: "/our-team" },
			],
		},
	];

	const isActive = (path) => router.pathname === path;

	// Check Scroll Position
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
				className={`bg-[#ffffff] text-white w-full fixed z-50 ease-in duration-300 ${
					navbarTop ? " bg-opacity-100 lg:bg-opacity-70" : "bg-opacity-100"
				}`}
			>
				<header className="flex items-center justify-between max-w-7xl mx-auto py-1.5 ">
					{/* Open & Close Button */}
					<button
						onClick={() => setOpen(!open)}
						className="block lg:hidden mt-2 lg:mt-0 px-6"
					>
						{!open ? (
							<AiOutlineMenu className="text-3xl text-darkBg" />
						) : (
							<AiOutlineClose className="text-3xl text-darkBg" />
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
					</Link>

					{/* Navbar */}
					<nav class="stroke">
						<ul className="hidden lg:flex lg:flex-row justify-between items-center gap-2 text-xl z-100">
							{menuItems.map((item, index) => (
								<li key={index}>
									{item.subMenuItems ? (
										<details open={isActive(item.path)}>
											<summary
												className={`cursor-pointer font-semibold ${
													isActive(item.path)
														? "active text-primary "
														: "text-darkBg"
												}`}
											>
												{item.name}
											</summary>
											<ul className="absolute  bg-darkBg text-darkBg rounded-md px-2 ">
												{item.subMenuItems.map((subItem, subIndex) => (
													<li key={subIndex} open={isActive(subItem.path)}>
														<Link href={subItem.path}>{subItem.name}</Link>
													</li>
												))}
											</ul>
										</details>
									) : (
										<Link
											href={item.path}
											className={`${
												isActive(item.path)
													? "active text-primary"
													: "text-darkBg"
											}`}
										>
											{item.name}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					<Link href={"/contacts"}>
						<button className="bg-primary rounded-sm hidden lg:block text-darkBg px-5 lg:px-6 py-1.5 lg:py-2 font-bold text-lg lg:text-xl">
							Get in touch
						</button>
					</Link>
				</header>

				{open && (
					<div
						className="bg-darkBg text-white rounded w-full pl-3 py-5 z-10 fixed"
						onClick={() => setOpen(false)}
					>
						<nav className="stroke">
							<ul className="lg:hidden flex flex-col items-start px-5 w-full">
								{menuItems.map((item, index) => (
									<li key={index}>
										{item.subMenuItems ? (
											<details
												open={isActive(item.path)}
												onClick={(e) => e.stopPropagation()}
											>
												<summary
													className={`${
														isActive(item.path)
															? "active text-primary"
															: "text-fontclr"
													}`}
												>
													{item.name}
												</summary>
												<ul className=" bg-darkBg text-white rounded-md  px-2">
													{item.subMenuItems.map((subItem, subIndex) => (
														<li key={subIndex}>
															<Link
																href={subItem.path}
																onClick={() => setOpen(false)}
																className={`${
																	isActive(subItem.path)
																		? "active text-primary"
																		: "text-fontclr"
																}`}
															>
																{subItem.name}
															</Link>
														</li>
													))}
												</ul>
											</details>
										) : (
											<Link
												href={item.path}
												className={`${
													isActive(item.path)
														? "active text-primary"
														: "text-fontclr"
												}`}
												onClick={() => setOpen(false)}
											>
												{item.name}
											</Link>
										)}
									</li>
								))}
								<Link href={"/contacts"}>
									<button className="bg-primary rounded-sm text-darkBg px-5 lg:px-6 py-1.5 lg:py-2 font-bold text-lg lg:text-xl w-full mt-4">
										Get in touch
									</button>
								</Link>
							</ul>
						</nav>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
