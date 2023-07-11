import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";

const SingleWork = () => {
	const router = useRouter();
	const { id } = router.query;
	const [project, setProject] = useState(null);
	// console.log(id);

	useEffect(() => {
		const project = OurProjects?.find((pro) => pro.id == id);
		setProject(project);
	}, [id]);

	if (!project) {
		return null; // or show a loading spinner/message while project is being fetched
	}

	return (
		<div>
			<SingleWorkBanner project={project} />
			<div className="bg-[#F8FAFB] text-darkBg px-5 lg:px-0">
				<div className="max-w-7xl mx-auto py-10 ">
					<div className="w-full lg:w-1/2 ">
						<Image
							src={project?.img}
							alt={project?.model}
							layout="responsive"
							width={100}
							height={100}
						/>
					</div>
					<div className="mt-5 flex items-start gap-6 ">
						<div>
							<p className="font-bold">Model Name:</p>
							<p>Category:</p>
							<p>Wing Span:</p>
							<p>Take off Weight:</p>
							<p>Payload:</p>
							<p>Endurance:</p>
							<p>Flight Speed:</p>
							<p>Flight Altitude:</p>
						</div>
						<div>
							<p className="font-bold"> {project?.model}</p>
							<p> {project?.category}</p>
							<p> {project?.WingSpan}</p>
							<p> {project?.TakeoffWeight}</p>
							<p> {project?.Payload}</p>
							<p> {project?.Endurance}</p>
							<p> {project?.FlightSpeed}</p>
							<p> {project?.FlightAltitude}</p>
						</div>
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
						<h1 className="text-2xl lg:text-3xl font-semibold max-w-5xl my-2">
							{project?.category}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
