import React from "react";
import { productsData } from "../../sharedPage/StaticData";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";

const Products = () => {
	return (
		<div className=" bg-primary text-white ">
			<div className="banner-bg flex items-center justify-center">
				<h2 className="text-6xl font-bold text-center">Products</h2>
			</div>

			<div className=" max-w-7xl mx-auto flex flex-col items-center py-10">
				<div className="flex flex-col gap-4 items-center justify-center text-center pb-10">
					<h1 className="text-greenclr font-bold text-base uppercase ">
						Products
					</h1>
					<h2 className=" introduce-title capitalize text-white">
						AuthBrain Provides Those Products
					</h2>
					<div className="h-[3px] w-20 bg-green-500"></div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5  px-6 lg:px-24 ">
					{productsData.map((sinPro) => (
						<Product key={sinPro.id} sinPro={sinPro} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;

const Product = ({ sinPro }) => {
	const router = useRouter();
	const { id, name, category, title, desc, img } = sinPro;

	//Handle Single Products
	const handleViewProduct = (id) => {
		console.log(id);
		router.push(`/products/${id}`);
	};

	return (
		<div class={`card`} style={{ backgroundImage: `url(${img})` }} key={id}>
			<div class="content">
				<h2 class="title uppercase bg-primary bg-opacity-5 w-full p-5">
					{name}
				</h2>
				<p class="copy">{title}</p>

				<button
					class="text-green-500 tracking-normal hover:tracking-wider  ease-in duration-300 "
					onClick={() => handleViewProduct(id)}
				>
					<Link href={`#`} className="flex items-center gap-1 ">
						<span>View Details</span>{" "}
						<IoIosArrowForward className="font-bold " />
					</Link>
				</button>
			</div>
		</div>
	);
};
