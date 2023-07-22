import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../../url";
import moment from "moment/moment";

const NewsDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const [sinNews, setSinNews] = useState({});

	useEffect(() => {
		fetch(`${baseURL}/news/${id}`)
			.then((res) => res.json())
			.then((data) => setSinNews(data));
	}, [id]);

	// console.log(sinNews);

	if (!sinNews) {
		return <p>Loading...</p>;
	};

	// newsCategory newsTitle newsImg createdAt
	return (
		<div className=" ">
			<div className="max-w-7xl mx-auto py-20  text-darkBg px-5 lg:px-0">
				<div>
					<span className="bg-[#F0F3F6] text-darkBg text-lg rounded-full py-1.5 px-5 ">
						{sinNews?.newsCategory}
					</span>

					<h3 className="text-2xl font-semibold my-2 text-darkBg ">
						{sinNews?.newsTitle}
					</h3>
					<p className="text-base lg:text-lg pb-5">
						Posted date: {moment(sinNews?.createdAt).format("MMM D, YYYY")}{" "}
					</p>
				</div>
				<div>
					<img
						src={`${baseURL}/${sinNews?.newsImg}`}
						alt={sinNews?.newsTitle}
						srcSet=""
						className="h-full w-full"
					/>
				</div>

				<div
					className="text-labelclr mt-4"
					dangerouslySetInnerHTML={{ __html: sinNews?.newsDesc }}
				/>
			</div>
		</div>
	);
};

export default NewsDetails;
