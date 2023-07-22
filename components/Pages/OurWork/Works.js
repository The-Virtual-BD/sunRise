import React, { useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";
import { useRouter } from "next/router";
import { useCollection } from "../../Context/Context";
import { baseURL } from "../../../url";

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
					
					<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">
						Areas of impact from our history of software development
					</h3>
					
				</div>
			</div>
		</div>
	);
};



const WorksProjects = () => {
	const {work,workLoading}=useCollection();

    if(workLoading){
        return <p>Loading...</p>
    };
    // console.log(work);

	return (
		<div className="bg-[#F8FAFB] py-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5 place-items-center  ">
				{work?.map((work) => (
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
		router.push(`our-work/${id}`);
	};

	return (
		<figure
			className={`snip1577 ${hover ? "hover" : ""} w-full shadow-xl `}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => handleSingleWork(project._id)}
		>
			<img src={`${baseURL}/${project.workImg}`} alt={project.workName} className="w-full" />
			<figcaption>
				<h3>{project.workCategory}</h3>
				<h4>{project.workName}</h4>
				{/* <h3><a href="#"> View Details</a></h3> */}
			</figcaption>
		</figure>
	);
};
