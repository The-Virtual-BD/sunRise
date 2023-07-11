import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";

const SingleWork = () => {
	const router = useRouter();
	const { id } = router.query;
	const [project, setProject] = useState({});
	// console.log(id);

	useEffect(() => {
		const project = OurProjects?.find((pro) => pro.id == id);
		setProject(project);
	}, [id]);

	return (
		<div>
			<SingleWorkBanner project={project} />
			<div className="bg-[#F8FAFB] text-darkBg">
				<div className="max-w-7xl mx-auto py-10 ">
					<div className="w-1/2">
						<Image
							src={project?.img}
							alt={project?.model}
							layout="responsive"
							width={100}
							height={100}
						/>
					</div>
					<div className="mt-5">
						<p className="font-bold"> Name: {project?.model}</p>
						<p>Wing Span: {project?.WingSpan}</p>
						<p>Take off Weight: {project?.TakeoffWeight}</p>
						<p>Payload: {project?.Payload}</p>
						<p>Endurance: {project?.Endurance}</p>
						<p>Flight Speed: {project?.FlightSpeed}</p>
						<p>Flight Altitude: {project?.FlightAltitude}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleWork;

const SingleWorkBanner = ({ project }) => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/bg-top-about-us.jpg")`,
					boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
				}}
				className="  text-white flex items-center top-header-bg"
			>
				<div className=" ">
					<div className="text-start mb-10 px-5 lg:px-24 ">
						<div className="flex items-center justify-start ">
							<h1 className="why-header-design">{project?.model}</h1>
						</div>
						<h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">
							{project?.category}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
