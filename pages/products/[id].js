import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productsData } from "../../components/sharedPage/StaticData";
import Image from "next/image";

const SingleProducts = () => {
	// const [singProduct, setSingProduct] = useState({});
	const router = useRouter();
	const { id } = router.query;
	// console.log(router)

	const singProduct = productsData.find((pro) => pro.id == id);

	return (
		<div className="bg-primary text-white">
			<div className="banner-bg flex items-center justify-center ">
				<h2 className="text-6xl font-bold text-center">Product Details</h2>
			</div>

			<div className="  py-10 max-w-7xl mx-auto px-6 lg:px-24">
				<h2 className=" font-bold text-3xl">{singProduct?.name}</h2>
				<p className=" mt-1">{singProduct?.title}</p>

				<div className=" py-5 ">
					<img
						src={singProduct?.Featimg}
						alt=""
						srcset=""
						className="w-full h-[400px] rounded-lg"
					/>
				</div>

				<p>{singProduct?.desc}</p>
			</div>
		</div>
	);
};

export default SingleProducts;
