import React from "react";
import { blogs, ourBlogs } from "../sharedPage/StaticData";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useCollection } from "../Context/Context";
import { baseURL } from "../../url";
import { useRouter } from "next/router";

const Blogs = () => {
	const router = useRouter();
	const { news, newsLoading } = useCollection();

	if (newsLoading) {
		return <p className="text-center text-lg">Loading...</p>;
	}

	if (!newsLoading && news.length === 0) {
		return <p className="text-center text-lg">No News Available</p>;
	};
	const sortNews = [...news].reverse();

	// console.log(sortNews);

	const handleNewsPage = (id) => {
		router.push(`latest-news/${id}`);
	};

	return (
		<div className="text-paraclr ">
			<div className="">
				<div className=" blog-title py-10  px-5">
					<h2 className="max-w-7xl mx-auto text-start text-3xl lg:text-5xl font-bold text-white">
						Latest news & insights
					</h2>
				</div>
				<div className="blog-content py-14">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-5">
						{sortNews
							.map((blog) => (
								<div
									key={blog._id}
									onClick={() => handleNewsPage(blog._id)}
									className="bg-white rounded-md shadow-sm hover:shadow-xl h-[500px]"
								>
									<img
										src={`${baseURL}/${blog.newsImg}`}
										alt={blog.newsTitle}
										className="rounded-t-md h-[300px] w-full"
									/>
									<div className="p-4">
										<span className="bg-[#F0F3F6] text-darkBg rounded-full py-1.5 px-3 ">
											{blog.newsCategory}
										</span>
										<h2 className="text-xl lg:text-2xl font-bold text-darkBg hover:text-secondary cursor-pointer my-2 ">
											{blog.newsTitle}
										</h2>

										<div
											className="text-labelclr text-sm lg:text-base"
											dangerouslySetInnerHTML={{
												__html: blog?.newsDesc.slice(0,156),
											}}
											
										/>
									</div>
								</div>
							))
							.slice(0, 3)}
					</div>

					<div className="flex items-center justify-center">
						<button className="bg-green-500 hover:bg-green-700 rounded-sm text-white px-6 lg:px-10 py-1.5 lg:py-3 text-bold text-lg lg:text-2xl mt-10">
							<Link href={"/latest-news"} className="flex items-center gap-1">
								<span>View All</span> <BsArrowRight />
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
