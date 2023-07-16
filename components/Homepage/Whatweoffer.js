import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whatweoffer = () => {
	return (
		<div className="bg-darkBg   text-fontclr  px-6 lg:px-32">
			<div className="flex flex-col lg:flex-row items-center gap-5 max-w-7xl mx-auto py-5">
				<div className="w-full lg:w-1/2">
					<div className="py-7">
						<h1 className="text-3xl lg:text-5xl font-bold py-5 mb-4">
							What we offer
						</h1>
						<div className="flex items-center gap-5">
							<Image
								src={"/images/icon-white-building.svg"}
								alt="building symbols"
								width={64}
								height={64}
							/>
							<p className="text-fontclr text-sm lg:text-base">
								In the web and software development category, we specialize in
								creating dynamic and responsive websites that cater to the
								unique needs of our clients.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-1/2">
					<Image
						src={"/images/loghtpaper.jpg"}
						alt="lightpaper"
						width={640}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default Whatweoffer;
