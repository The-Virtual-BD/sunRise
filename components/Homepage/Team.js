import React from 'react';
import { teamMember } from '../sharedPage/StaticData';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Team = () => {
    return (
        <div className='text-paraclr py-20 px-5 '>

            <div className='max-w-7xl mx-auto'>
                <span className='header-design'>
                    Our Team Members
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 mt-14 mb-20  max-w-7xl mx-auto">
                {teamMember.map((team) => (
                    <MemberCard key={team.id} team={team} />
                ))}
            </div>

            <div className='flex items-center justify-center'>
                <button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
                    <Link href={"/"} className='flex items-center gap-1'>
                        <span>View All</span> <BsArrowRight />
                    </Link>
                </button>
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

                    {/* <div className="team_social">
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
					</div> */}

                </div>
            </div>
        </div>
    );
};