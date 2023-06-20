import React from "react";
import { industriesData } from "../../sharedPage/StaticData";

const Solutions = () => {
	return (
		<div className=" bg-primary text-white ">
			<div className="banner-bg flex items-center justify-center">
				<h2 className="text-6xl font-bold text-center">Solutions</h2>
			</div>

			<div className="py-10 max-w-7xl mx-auto flex flex-col items-center ">
				<div className="flex flex-col gap-4 items-center justify-center text-center max-w-7xl mx-auto">
					<h1 className="text-greenclr font-bold text-base uppercase ">
						Solutions
					</h1>
					<h2 className=" introduce-title capitalize text-white">
						AuthBrain Provides This Solution
					</h2>
					<div className="h-[3px] w-20 bg-green-500"></div>
				</div>

				<div className="flex flex-col items-center gap-5 px-6 lg:px-24 mt-20">
					{industriesData.map((singleSol) => (
						<SolutionCard key={singleSol.id} singleSol={singleSol} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Solutions;

const SolutionCard = ({ singleSol }) => {
	const {
		id,
		title,
		feat1,
		feat1Desc,
		feat2,
		feat2Desc,
		feat3,
		feat3Desc,
		feat1Icon,
		feat2Icon,
		feat3Icon,
	} = singleSol;

	return (
		<div>
			<h2 className="text-2xl font-bold mb-5">{title}</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-primary">
				<div className="w-full  rounded-md  p-5 text-center solution-card">
					<div className="text-5xl flex items-center justify-center ">
						{feat1Icon}
					</div>
					<h2 className="text-2xl font-semibold mt-5 mb-3 text-greenclr">
						{feat1}
					</h2>
					<p className=" ">{feat1Desc}</p>
				</div>

				<div className="w-full solution-card p-5 rounded-md  text-center">
					<div className="text-5xl flex items-center justify-center ">
						{feat2Icon}
					</div>
					<h2 className="text-2xl font-semibold mt-5 mb-3 text-greenclr">
						{feat2}
					</h2>
					<p className=" ">{feat2Desc}</p>
				</div>

				<div className="w-full solution-card p-5 rounded-md  text-center ">
					<div className="text-5xl flex items-center justify-center ">
						{feat3Icon}
					</div>
					<h2 className="text-2xl font-semibold mt-5 mb-3 text-greenclr">
						{feat3}
					</h2>
					<p className=" ">{feat3Desc}</p>
				</div>
			</div>
		</div>
	);
};
