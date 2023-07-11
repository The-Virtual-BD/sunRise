import React, { useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";
import { useRouter } from "next/router";

const Works = () => {
	return (
		<div>
			<WorksBanner />
			<WorksProjects />
		</div>
	);
};

export default Works;

const WorksBanner = () => {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/projects/bg-top-work.jpg")`,
				boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
			}}
			className="  text-white flex items-center top-header-bg"
		>
			<div className=" ">
				<div className="text-start mb-10 px-5 lg:px-24 ">
					<div className="flex items-center justify-start ">
						<h1 className="why-header-design">Our Works</h1>
					</div>
					<h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">
						Passionate & driven
					</h1>
					<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">
						Areas of impact from our history of software development
					</h3>
					{/* <p className="bg-darkBg bg-opacity-50 px-3 py-7 rounded-md max-w-4xl text-sm lg:text-base mt-2">Our software development company architects, builds, and supports business-critical software systems. We partner with our customers to solve complex problems in software engineering and computer science, delivering meaningful impact and lasting value.</p> */}
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
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center  ">
				{OurProjects.map((work) => (
					<div key={work.id}>
						<ProjectCard project={work} />
					</div>
				))}
			</div>
		</div>
	);
};
