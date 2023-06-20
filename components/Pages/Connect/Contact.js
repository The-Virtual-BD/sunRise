import React from "react";
import {
	AiFillSkype,
	AiOutlineMail,
	AiOutlineMobile,
	AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	return (
		<div className="bg-secdarkBg">
			<div className="banner-bg flex items-center justify-center">
				<h2 className="text-4xl lg:text-6xl font-bold text-center text-white">
					Contact The AuthBrain
				</h2>
			</div>

			<div className="py-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-24 bg-secdarkBg text-white">
				<div>
					<div className="text-start">
						<h3 className="text-greenclr mb-2 font-bold">Address</h3>

						<p className="">
							Home 315, Road 3, Phase 2,
							<br />
							Sonadanga R/A, Khulna 9100, <br />
							Bangladesh
						</p>
						{/* <p className="">
							Deira, Near Gold Center Building,
							<br />
							Dubai 75157, <br />
							United Arab Emirates
						</p> */}
					</div>

					<div className="text-start mt-10">
						<h3 className="text-greenclr mb-2 font-bold">Contact</h3>

						<div className="flex flex-col gap-4">
							<a
								href="skype:mh_ashiq?chat"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex items-center gap-2">
									<div className="h-8 w-8 rounded-full bg-[#0078D7] hover:bg-greenclr flex items-center justify-center">
										<AiFillSkype className="text-xl text-white" />
									</div>
									<p>live:mh_ashiq</p>
								</div>
							</a>

							<a href="tel:8801902624501">
								<div className="flex items-center gap-2">
									<div className="h-8 w-8 rounded-full bg-red-500 hover:bg-greenclr flex items-center justify-center">
										<AiOutlineMobile className="text-xl text-white" />
									</div>
									<p>+880 1902-624501</p>
								</div>
							</a>

							<a
								href="mailto:contact@authbrain.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex items-center gap-2">
									<div className="h-8 w-8 rounded-full bg-black hover:bg-greenclr flex items-center justify-center">
										<MdEmail className="text-xl text-white" />
									</div>
									<p>contact@authbrain.com</p>
								</div>
							</a>

							<a
								href="https://wa.me/8801902624501"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex items-center gap-2">
									<div className="h-8 w-8 rounded-full bg-green-700 hover:bg-greenclr flex items-center justify-center">
										<AiOutlineWhatsApp className="text-xl text-white" />
									</div>
									<p>+880 1902-624501</p>
								</div>
							</a>
						</div>
					</div>
				</div>

				<div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.84859804064766!2d89.54331088429272!3d22.818111608565452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bd89294df9f%3A0xf7219ca732219803!2sThe%20Virtual%20BD!5e0!3m2!1sen!2snl!4v1682846220350!5m2!1sen!2snl"
						className="w-[400px] lg:w-[500px] h-[400px] rounded-sm"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>

					{/* <iframe
						src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3607.9847392458055!2d55.29374612695312!3d25.271098800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDeira%2C%20Near%20Gold%20Center%20Building%2C%20Dubai%2075157%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2snl!4v1681202182863!5m2!1sen!2snl"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe> */}
				</div>
			</div>
		</div>
	);
};

export default Contact;
