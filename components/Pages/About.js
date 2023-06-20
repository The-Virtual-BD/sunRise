import React from "react";
import GetStarted from "../Homepage/GetStarted";
import Team from "./Team";

const About = () => {
	return (
		<div className=" bg-primary text-white ">
			<div className="banner-bg flex items-center justify-center">
				<h2 className="text-6xl font-bold text-center">About Us</h2>
			</div>

			<div className="py-10  flex flex-col items-center px-6  max-w-7xl mx-auto">
				<div className="flex flex-col gap-4 items-center justify-center text-center max-w-7xl mx-auto">
					<h1 className="text-greenclr font-bold text-base uppercase ">
						Introduction
					</h1>
					<h2 className=" introduce-title capitalize text-white">
						About The AuthBrain
					</h2>
					<div className="h-[3px] w-20 bg-green-500"></div>
				</div>

				<div className="my-10">
					<p>
						Welcome to <strong>AuthBrain</strong>, the AI service company that helps businesses
						harness the power of artificial intelligence to drive growth and
						innovation.{" "}
					</p>

					<p className="my-3">
						At <strong>AuthBrain</strong>, we believe that AI has the potential to transform
						every industry and revolutionize the way we work, live, and interact
						with the world. That&apos;s why we are committed to providing
						cutting-edge AI solutions and services that help businesses of all
						sizes unlock the full potential of this powerful technology.
					</p>
					<p className="my-3">
						Our team of expert data scientists, machine learning engineers, and
						AI consultants brings together decades of experience in the field of
						AI and a passion for innovation. We work closely with our clients to
						understand their unique needs and challenges and develop customized
						solutions that address their specific business objectives.
					</p>
					<p className="my-3">
						Whether you&apos;re looking to automate repetitive tasks, optimize
						your business processes, or gain valuable insights from your data,
						we have the expertise and technology to help you succeed. From
						chatbots and virtual assistants to predictive analytics and deep
						learning algorithms, we offer a wide range of AI services that can
						be tailored to your specific needs.{" "}
					</p>

					<p className="my-3">
						At <strong>AuthBrain</strong>, we are committed to providing the highest level of
						service and support to our clients. We believe that transparency,
						collaboration, and trust are the keys to a successful partnership,
						and we work hard to build long-term relationships with each of our
						clients.
					</p>
					<p className="my-3">
						So, whether you&apos;re a small startup or a large enterprise, let
						<strong>AuthBrain</strong> help you unlock the full potential of AI and take your
						business to the next level. Contact us today to learn more about our
						AI services and how we can help you succeed.
					</p>
				</div>

				<Team />
			</div>
		</div>
	);
};

export default About;
