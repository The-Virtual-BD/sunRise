import React from "react";
import { blogs, ourBlogs } from "../sharedPage/StaticData";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs';

const Blogs = () => {
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
						{ourBlogs
							.map((blog) => (
								<div
									key={blog.id}
									className="bg-white rounded-md shadow-sm hover:shadow-xl "
								>
									<img
										src={blog.blogImg}
										alt={blog.blogCategory}
										className="rounded-t-md h-[300px] w-full"
									/>
									<div className="p-4">
										<span className="bg-[#F0F3F6] text-darkBg rounded-full py-1.5 px-3 ">
											{blog.blogCategory}
										</span>
										<h2 className="text-xl lg:text-2xl font-bold text-darkBg hover:text-secondary cursor-pointer my-2 ">
											{blog.blogTitle}
										</h2>
										<p className="text-sm lg:text-base">{blog.blogSubTitle}</p>
									</div>

									<div className="flex items-center gap-3 p-4">
										<Image
											src={blog.bloggerImg}
											width={40}
											height={40}
											className="rounded-full"
											alt=""
										/>
										<div>
											<h3 className="font-bold text-base lg:text-lg">
												{blog.bloggerName}
											</h3>
											<p className="text-sm">{blog.blogTime}</p>
										</div>
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


