import Image from "next/image";
import React from "react";
import { baseURL } from "../../../url";
import { useCollection } from "../../Context/Context";
import { useRouter } from "next/router";

const News = () => {
	return <div>
		<NewsBanner />
		<NewsData />

	</div>;
};

export default News;

const NewsData = () => {
	const { news, newsLoading } = useCollection();

	if (newsLoading) {
		return <p className="text-center text-lg">Loading...</p>;
	}

	if (!newsLoading && news.length === 0) {
		return <p className="text-center text-lg">No News Available</p>;
	}
	const sortNews = [...news].reverse();

	// console.log(sortNews);
	return (
		<div className="bg-white">
			
			<RecentBlog sortNews={sortNews} />
			<LatestNews sortNews={sortNews} />
		</div>
	);
};

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

const RecentBlog = ({ sortNews }) => {
	const router = useRouter();
	const lastNews = sortNews[0];
	// console.log(lastNews);

	const handleNewsPage = (id) => {
		router.push(`latest-news/${id}`);
	};

	return (
		<div className="max-w-7xl mx-auto py-10 bg-white text-darkBg px-5 lg:px-0">
			<h2 className="font-bold tracking-wide text-xl">WHATS NEW</h2>
			<div className="flex flex-col lg:flex-row items-start gap-4">
				<div className="w-full lg:w-1/2">
					<img
						src={`${baseURL}/${lastNews?.newsImg}`}
						alt={lastNews?.newsTitle}
						className="h-[500px] w-full"
					/>
				</div>
				<div className="w-full lg:w-1/2 h-full lg:min-h-[500px] flex flex-col justify-between gap-3">
					<div>
						<span className="bg-[#F0F3F6] text-darkBg  rounded-full py-1.5 px-3 ">
							{lastNews?.newsCategory}
						</span>
						<h3
							onClick={() => handleNewsPage(lastNews?._id)}
							className="text-2xl font-semibold my-2 text-darkBg hover:text-darkgreen cursor-pointer"
						>
							{lastNews?.newsTitle}
						</h3>

						<div
							className="text-labelclr text-sm lg:text-base"
							dangerouslySetInnerHTML={{
								__html: lastNews?.newsDesc.slice(0, 500),
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const LatestNews = ({ sortNews }) => {
	const router = useRouter();
	const prevNews=sortNews?.filter((newd)=> (newd._id !== sortNews[0]._id));
	console.log(prevNews)

	const handleNewsPage = (id) => {
		router.push(`latest-news/${id}`);
	};

	return (
		<div className="bg-[#F8FAFB] py-6">
			<div className="max-w-7xl mx-auto text-darkBg">
				<h2 className="font-bold tracking-wide text-xl">PREVIOUS POST</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5  px-5 lg:px-0 place-items-center mt-3">
					{prevNews.map((blog) => (
						<div
							key={blog._id}
							onClick={() => handleNewsPage(blog._id)}
							className="bg-white rounded-md shadow-sm hover:shadow-xl h-[500px] cursor-pointer overflow-hidden"
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
								<h2 className="text-xl lg:text-2xl font-bold text-darkBg  mb-2 mt-1 ">
									{blog.newsTitle.slice(0,60)}
								</h2>

								<div
									className="text-labelclr text-sm lg:text-base"
									dangerouslySetInnerHTML={{
										__html: blog?.newsDesc.slice(0, 100),
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
