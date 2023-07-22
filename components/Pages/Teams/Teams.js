import React from "react";
import { useCollection } from "../../Context/Context";
import { baseURL } from "../../../url";
import { useRouter } from "next/router";

const Teams = () => {
	return (
		<div className="bg-white">
			<TeamBanner />
			<TeamData />
		</div>
	);
};

export default Teams;

const TeamData = () => {
	const { team, teamLoading } = useCollection();

	if (teamLoading) {
		return <p className="text-center text-lg">Loading...</p>;
	}
	// console.log(team);

	if (!teamLoading && team.length === 0) {
		return <p className="text-center text-lg">Empty Team</p>;
	}
	return (
		<div className="text-paraclr py-5 lg:py-14 px-5 ">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-10 mt-20 mb-20  max-w-7xl mx-auto">
				{team?.map((team) => (
					<MemberCard key={team._id} team={team} />
				))}
			</div>
		</div>
	);
};

const MemberCard = ({ team }) => {
	const router = useRouter();
	const { _id, memberName, memberImg, memberDesi } = team;

	const handleMemberPage = (id) => {
		router.push(`our-team/${id}`);
	};

	return (
		<div>
			<div
				className="team_card shadow-lg"
				onClick={() => handleMemberPage(_id)}
			>
				<div className="team_img">
					<img src={`${baseURL}/${memberImg}`} alt={memberName} />
				</div>

				<div className="team_info">
					<h2 className="font-semibold">{memberName}</h2>
					<p className="text-sm lg:text-base">{memberDesi}</p>
				</div>
			</div>
		</div>
	);
};

const TeamBanner = () => {
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
						<h1 className="why-header-design">Our Dedicated Team</h1>
					</div>

					<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">
						Areas of impact from our history of software development
					</h3>
				</div>
			</div>
		</div>
	);
};
