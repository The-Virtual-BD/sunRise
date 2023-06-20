import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Research = () => {
	return (
		<div className=" bg-primary text-white ">
			<div className="banner-bg flex items-center justify-center">
				<h2 className="text-6xl font-bold text-center">Research</h2>
			</div>
			<div className="py-10 max-w-7xl mx-auto flex flex-col items-center px-6  ">
				<div className="flex flex-col gap-4 items-center justify-center text-center max-w-7xl mx-auto">
					<h1 className="text-greenclr font-bold text-base uppercase ">
						Research
					</h1>
					<h2 className=" introduce-title capitalize text-white">
						About Our Research
					</h2>
					<div className="h-[3px] w-20 bg-green-500"></div>
				</div>

				<div className="my-10">
					<p>here&apos;s a list of research areas for AuthBrain:</p>
					<p className="my-3">
						<span className="text-greenclr font-semibold">
							Biomedical Engineering:
						</span>{" "}
						AuthBrain can research and develop AI-powered solutions for
						healthcare applications, such as medical imaging analysis, disease
						diagnosis and prognosis, personalized medicine, and drug discovery.
					</p>
					<p>
						<span className="text-greenclr font-semibold">
							Human Activity Recognition:
						</span>{" "}
						AuthBrain can research and develop AI-powered solutions for
						recognizing and analyzing human activities, such as sports
						performance tracking, gait analysis, fall detection, and gesture
						recognition.
					</p>

					<p className="my-3">
						<span className="text-greenclr font-semibold">Neuroscience:</span>{" "}
						AuthBrain can research and develop AI-powered solutions for
						understanding the brain and the nervous system, such as
						brain-computer interfaces, cognitive neuroscience, and neural
						prosthetics.
					</p>

					<p className="my-3">
						<span className="text-greenclr font-semibold">
							Software Engineering:
						</span>{" "}
						AuthBrain can research and develop AI-powered solutions for software
						engineering applications, such as software testing, debugging,
						maintenance, and optimization.
					</p>

					<p>
						Overall, AuthBrain&apos;s research areas would focus on applying AI
						technologies to solve real-world problems in different domains, such
						as healthcare, sports, neuroscience, and software engineering. The
						company&apos;s goal would be to develop cutting-edge AI solutions
						that can help businesses and organizations innovate and achieve
						their objectives.
					</p>
				</div>

				<div className="text-center mt-5">
					<button className="view-details-btn">
						<a
							href="https://scholar.google.com/citations?user=Ts2F72QAAAAJ&hl=en&authuser=2"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1"
						>
							<span>Let&lsquo;s Check Our Research</span>{" "}
							<IoIosArrowForward className="font-bold " />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Research;
