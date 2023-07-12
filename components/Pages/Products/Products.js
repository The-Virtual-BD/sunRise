import React, { useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";
import { useRouter } from "next/router";

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
				backgroundImage: ` url("/images/bg-top-product.jpg")`,
				
			}}
			className="  text-white flex items-center top-header-bg"
		>
			<div className=" ">
				<div className="text-start mb-10 px-5 lg:px-24 ">
					<div className="flex items-center justify-start ">
						<h1 className="why-header-design">Our Products</h1>
					</div>
					{/* <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">
						Passionate & driven
					</h1> */}
					<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">
						Areas of impact from our history of software development
					</h3>
				</div>
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
		router.push(`our-work/${id}`);
	};

	return (
		<figure
			className={`snip1577 ${hover ? "hover" : ""} w-full shadow-xl `}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => handleSingleWork(project.id)}
		>
			<img src={project.img} alt={project.model} className="w-full" />
			<figcaption>
				<h3>{project.category}</h3>
				<h4>{project.model}</h4>
				{/* <h3><a href="#"> View Details</a></h3> */}
			</figcaption>
		</figure>
	);
};

const WorksProjects = () => {
	return (
		<div className="bg-[#F8FAFB] py-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5 place-items-center  ">
				{OurProjects.map((work) => (
					<div key={work.id}>
						<ProjectCard project={work} />
					</div>
				))}
			</div>
		</div>
	);
};
