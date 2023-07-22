import React, { useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";
import { useRouter } from "next/router";
import { useCollection } from "../../Context/Context";
import { baseURL } from "../../../url";

const Products = () => {
	return (
		<div>
			<ProductBanner />
			<WorksProjects />
		</div>
	);
};

export default Products;

const ProductBanner = () => {
	return (
		<div
			style={{
				backgroundImage: `url("/images/bg-top-product.jpg")`,
			}}
			className="  text-white flex items-center top-header-bg"
		>
			<div className=" ">
				<div className="text-start mb-10 px-5 lg:px-24 ">
					<div className="flex items-center justify-start ">
						<h1 className="why-header-design">Our Products</h1>
					</div>
					
					<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">
						Areas of impact from our history of software development
					</h3>
				</div>
			</div>
		</div>
	);
};



const WorksProjects = () => {
	const {products,productsLoading}=useCollection();

    if(productsLoading){
        return <p>Loading...</p>
    };

    console.log(products);
	return (
		<div className="bg-[#F8FAFB] py-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5 place-items-center  ">
				{products?.map((work) => (
					<div key={work._id}>
						<ProjectCard project={work} />
					</div>
				))}
			</div>
		</div>
	);
};


const ProjectCard = ({ project }) => {
	const [hover, setHover] = useState(false);
	const router = useRouter();

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	const handleSingleWork = (id) => {
		router.push(`products/${id}`);
	};

	return (
		<figure
			className={`snip1577 ${hover ? "hover" : ""} w-full shadow-xl `}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => handleSingleWork(project._id)}
		>
			<img src={`${baseURL}/${project?.proImg}`} alt={project?.proName} className="w-full" />
			<figcaption>
				<h3>{project?.proName}</h3>
				<h4>{project?.proCategory}</h4>
				{/* <h3><a href="#"> View Details</a></h3> */}
			</figcaption>
		</figure>
	);
};
