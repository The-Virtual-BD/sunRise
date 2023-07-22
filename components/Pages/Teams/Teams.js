import React from 'react';
import { useCollection } from '../../Context/Context';
import { baseURL } from '../../../url';

const Teams = () => {
    const { team, teamLoading } = useCollection();

	if (teamLoading) {
		return <p  className="text-center text-lg">Loading...</p>;
	};
	// console.log(team);

    if(!teamLoading && team.length===0){
		return <p  className="text-center text-lg">Empty Team</p>
	};
    
    return (
        <div className="text-paraclr py-20 px-5 ">
        <div className="max-w-7xl mx-auto">
            <span className="header-design">Our Team Members</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-10 mt-20 mb-20  max-w-7xl mx-auto">
            {team?.map((team) => <MemberCard key={team._id} team={team} />)}
        </div>
       
    </div>
    );
};

export default Teams;



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