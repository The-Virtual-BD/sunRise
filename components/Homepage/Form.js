import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { toast } from "react-toastify";
import { baseURL } from "../../url";

const Form = () => {
	const [msg, setMsg] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [submitting, setSubmitting] = useState(false);

	const handleContactForm = (e) => {
		e.preventDefault();

		const cratedAt = new Date();
		const data = { msg, name, email, phone, cratedAt };

		try {
			// console.log(data);
			const url = `${baseURL}/contact/create`;
			axios
				.post(url, data)
				.then((res) => {
					console.log(res);
					setSubmitting(false);
					e.target.reset();
					toast.success("Form Submitted!");
				})
				.catch((error) => {
					console.log(error);
					toast.error("Form Submit Failed!");
				});
		} catch (error) {
			console.log("Form Sent Failed", error);
			setSubmitting(false);
		}
	};

	return (
		<div className="text-paraclr py-20 px-5  bg-white">
			<div className="max-w-4xl mx-auto">
				<div className="flex items-center justify-between mb-10">
					<h2 className="text-3xl lg:text-5xl font-bold ">
						Let&apos;s work together
					</h2>
					<Image
						src={"/images/icon-form-01-blue.svg"}
						alt={"form"}
						width={65}
						height={65}
					/>
				</div>

				<form onSubmit={handleContactForm} className="text-base lg:text-xl">
					<textarea
						onChange={(e) => setMsg(e.target.value)}
						className="textarea textarea-accent w-full h-40 border-0 mb-4 bg-formclr"
						placeholder="Project description*"
					></textarea>

					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						placeholder="Name*"
						className="input  input-accent w-full mb-4 border-0 bg-formclr"
					/>

					<div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
						<input
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email*"
							className="input  input-accent w-full border-0 bg-formclr"
						/>

						<input
							type="tel"
							onChange={(e) => setPhone(e.target.value)}
							placeholder="Phone (optional)"
							className="input input-accent w-full border-0 bg-formclr"
						/>
					</div>

					<div className="flex items-center justify-center">
						<button
							disabled={submitting}
							type="submit"
							className="bg-yellow-500 hover:bg-yellow-400 rounded-sm text-black  px-6 lg:px-10 py-1.5 lg:py-3 font-semibold text-lg lg:text-2xl mt-10 flex items-center gap-1"
						>
							<span>{submitting ? "Sending..." : "Send"} </span>{" "}
							<BsArrowRight />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
