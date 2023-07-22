import React from "react";
import { teamMember } from "../sharedPage/StaticData";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useCollection } from "../Context/Context";
import { baseURL } from "../../url";

const Team = () => {
	const { team, teamLoading } = useCollection();

	if (teamLoading) {
		return <p  className="text-center text-lg">Loading...</p>;
	};

    if(!teamLoading && team.length===0){
		return <p  className="text-center text-lg">Empty Team</p>
	};
	// console.log(team);

	return (
		<div className="text-paraclr py-20 px-5 ">
			<div className="max-w-7xl mx-auto">
				<span className="header-design">Our Team Members</span>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-10 mt-20 mb-20  max-w-7xl mx-auto">
				{team
					?.map((team) => <MemberCard key={team._id} team={team} />)
					.slice(0, 4)}
			</div>

			<div className="flex items-center justify-center">
				<button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
					<Link href={"/our-team"} className="flex items-center gap-1">
						<span>View All</span> <BsArrowRight />
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Team;

const MemberCard = ({ team }) => {
	const { memberName, memberImg, memberDesi } = team;
	return (
		<div>
			<div className="team_card ">
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
