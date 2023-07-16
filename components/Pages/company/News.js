import Image from "next/image";
import React from "react";
import { blogs, blogse, ourBlogs } from "../../sharedPage/StaticData";

const News = () => {
	return (
		<div>
			<NewsBanner />
			<RecentBlog />

			<LatestNews />
		</div>
	);
};

export default News;

const NewsBanner = () => {
	return (
		<div
			style={{
				backgroundImage: ` url("/images/news/bg-top-blogroot.jpg")`,
			}}
			className="  text-white flex items-center top-header-bg"
		>
			<div className=" ">
				<div className="text-start mb-10 px-5 lg:px-24 ">
					<div className="flex items-center justify-start ">
						<h1 className="why-header-design">Our Latest News</h1>
					</div>
					{/* <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl my-2">Passionate & driven</h1> */}
					<h3 className="text-lg lg:text-2xl font-semibold max-w-5xl pt-2 pb-5">
						Recent articles and expert opinions from Sunrise
					</h3>
				</div>
			</div>
		</div>
	);
};

const RecentBlog = () => {
	return (
		<div className="max-w-7xl mx-auto py-10 bg-white text-darkBg px-5 lg:px-0">
			<h2 className="font-bold tracking-wide text-xl">WHATS NEW</h2>
			<div className="flex flex-col lg:flex-row items-start gap-4">
				<div className="w-full lg:w-1/2">
					<Image
						src={"/images/bg-si-02.jpg"}
						layout="responsive"
						width={100}
						height={100}
						alt=""
						style={{ width: "100%", maxHeight: "500px" }}
					/>
				</div>
				<div className="w-full lg:w-1/2 h-full lg:min-h-[500px] flex flex-col justify-between gap-3">
					<div>
						<span className="bg-[#F0F3F6] text-darkBg rounded-full py-1.5 px-3 ">
							Laravel
						</span>
						<h3 className="text-2xl font-semibold my-2">What is a Laravel?3</h3>
						<p className="text-lg ">
							Adobe Photoshop is a graphics editing software developed and
							published by Adobe Inc. It was first released in February 1990,
							and has since become one of the most popular and widely-used image
							editing applications in the world.
						</p>
					</div>

					{/* <div className="flex items-center gap-3">
						<Image
							src={"/images/img-photo-Brad-Garlinghouse.jpg"}
							width={50}
							height={50}
							className="rounded-full"
							alt=""
						/>
						<div>
							<h3 className="font-bold text-xl">John Dean</h3>
							<p>09 April, 2023</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

const LatestNews = () => {
	return (
		<div className="bg-[#F8FAFB] py-6">
			<div className="max-w-7xl mx-auto text-darkBg">
				<h2 className="font-bold tracking-wide text-xl">PREVIOUS POST</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5  px-5 lg:px-0 place-items-center mt-3">
					{ourBlogs.map((blog) => (
						<div
							key={blog.id}
							className="bg-white rounded-md shadow-sm hover:shadow-xl cursor-pointer"
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

							{/* <div className="flex items-center gap-3 p-4">
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
							</div> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
