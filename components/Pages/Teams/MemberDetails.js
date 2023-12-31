import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../../url";

const MemberDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const [sinMember, setSinMember] = useState({});

	useEffect(() => {
		fetch(`${baseURL}/team/${id}`)
			.then((res) => res.json())
			.then((data) => setSinMember(data));
	}, [id]);

	// console.log(sinMember);

	if (!sinMember) {
		return null;
	};
	return (
		<div>
			<SingleWorkBanner sinMember={sinMember} />
			<div className="bg-[#F8FAFB] text-darkBg px-5 lg:px-0">
				<div className="max-w-7xl mx-auto py-10 ">
					<div className="w-full ">
						<img
							src={`${baseURL}/${sinMember.memberImg}`}
							alt={sinMember?.memberName}
							className="w-[350px] h-[350px]"
						/>
					</div>

					<div className="flex flex-col items-start gap-3 mt-5">
						<h3 className="text-start">
							<span className="font-bold"> Name: </span>
							{sinMember?.memberName}
						</h3>
						<p>
							<span className="font-bold"> Designation: </span>
							{sinMember?.memberDesi}
						</p>

						<div className="text-start">
							<h3 className="font-bold"> Description: </h3>
							<div
								className="text-labelclr"
								dangerouslySetInnerHTML={{ __html: sinMember?.memberDesc }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MemberDetails;

const SingleWorkBanner = ({ sinMember }) => {
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
							<h1 className="why-header-design">{sinMember?.memberName}</h1>
						</div>
						<h1 className="text-2xl lg:text-3xl font-semibold max-w-5xl my-2">
							{sinMember?.memberDesi}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
