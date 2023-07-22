import React from "react";
import verizon from "../../public/images/Brand/logo-verizon.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useCollection } from "../Context/Context";
import { baseURL } from "../../url";

const brandImg = [
	{
		id: 1,
		img: "/images/Brand/vbd.jpg",
	},
	{
		id: 2,
		img: "/images/Brand/moth.jpg",
	},
	{
		id: 3,
		img: "/images/Brand/postal-logo.png",
	},
	{
		id: 4,
		img: "/images/Brand/works.jpg",
	},
	{
		id: 5,
		img: "/images/Brand/logo-nyse.svg",
	},
	{
		id: 6,
		img: "/images/Brand/logo-point-one.png",
	},
	{
		id: 7,
		img: "/images/Brand/works.jpg",
	},
	{
		id: 8,
		img: "/images/Brand/logo-nyse.svg",
	},
	{
		id: 9,
		img: "/images/Brand/logo-point-one.png",
	},
];

const Brand = () => {
	const { brands, brandLoading } = useCollection();

	if (brandLoading) {
		return <p>Loading...</p>;
	};

	if(!brandLoading && brands.length===0){
		return <p>Empty Brand</p>
	};
	// console.log(brands);

	return (
		<div className="bg-white  overflow-hidden">
			<div className=" flex items-center justify-center">
				<Marquee
					speed={50}
					className="w-full   flex items-center justify-center"
				>
					{brands?.map((data) => (
						<BrandCard key={data._id} data={data} />
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default Brand;

const BrandCard = ({ data }) => {
	return (
		<div>
			<img
				src={`${baseURL}/${data?.brandImg}`}
				alt={data?.brandName}
				className="brand-img"
			/>
		</div>
	);
};
