import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { OurProjects } from "../../sharedPage/StaticData";
import { baseURL } from "../../../url";

const SingleWork = () => {
	const router = useRouter();
	const { id } = router.query;
	const [sinWork, setSinWork] = useState({});

	useEffect(() => {
		fetch(`${baseURL}/work/${id}`)
			.then((res) => res.json())
			.then((data) => setSinWork(data));
	}, [id]);

	console.log(sinWork);

	if (!sinWork) {
		return null;
	};

	return (
		<div>
			<SingleWorkBanner sinWork={sinWork} />
			<div className="bg-[#F8FAFB] text-darkBg px-5 lg:px-0">
				<div className="max-w-7xl mx-auto py-10 ">
					<div className="w-full lg:w-1/2 mx-auto">
						<img
							src={`${baseURL}/${sinWork.workImg}`}
							alt={sinWork?.workName}
							className="w-full max-h-[500px]"
						/>
					</div>

					<div className="flex flex-col items-start gap-3 mt-5">
						<h3 className="text-start">
							<span className="font-bold">Name:</span>
							{sinWork?.workName}
						</h3>
						<p>
							<span className="font-bold">Category: </span>
							{sinWork?.workCategory}
						</p>

						<div className="text-start">
							<h3 className="font-bold">Description:</h3>
							<div
								className="text-labelclr"
								dangerouslySetInnerHTML={{ __html: sinWork?.workDesc }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleWork;

const SingleWorkBanner = ({ sinWork }) => {
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
							<h1 className="why-header-design">{sinWork?.workName}</h1>
						</div>
						<h1 className="text-2xl lg:text-3xl font-semibold max-w-5xl my-2">
							{sinWork?.workCategory}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
