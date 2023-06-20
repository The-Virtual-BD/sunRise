import Link from "next/link";
import React from "react";
import { teamMember } from "../sharedPage/StaticData";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Team = () => {
	return (
		<div className=" py-10 bg-primary text-white">
			<div className="flex flex-col gap-4 items-center justify-center text-center max-w-7xl mx-auto">
				<h1 className="text-greenclr font-bold text-base uppercase ">
					Team
				</h1>
				<h2 className=" introduce-title capitalize text-white">
				Meet The AuthBrain Team
				</h2>
				<div className="h-[3px] w-20 bg-green-500"></div>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 lg:gap-y-20 mt-10 mb-20  max-w-7xl mx-auto">
				{teamMember.map((team) => (
					<MemberCard key={team.id} team={team} />
				))}
			</div>
		</div>
	);
};

export default Team;

const MemberCard = ({ team }) => {
	const { id, name, img, designation, linkedIn, github } = team;
	return (
		<div>
			<div className="team_card ">
				<div className="team_img">
					<img src={img} alt={name} />
				</div>

				<div className="team_info">
					<h2 className="font-semibold">{name}</h2>
					<p className="italic">{designation}</p>

					<div className="team_social">
						<div className="flex items-center gap-3 justify-center">
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsFacebook />
								</Link>
							</div>
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsTwitter />
								</Link>
							</div>
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsInstagram />
								</Link>
							</div>
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsLinkedin />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
