import React from "react";
import { useCollection } from "../Context/Context";

const Faqs = () => {
    const {faqs,faqLoading}=useCollection();
    if(faqLoading){
        return <p  className="text-center text-lg">Loading...</p>
    };
	
	if(!faqLoading && faqs.length===0){
		return <p  className="text-center text-lg">Empty FAQs</p>
	};

    // console.log(faqs)

	return (
		<section className=" bg-[#F0F3F6] text-darkBg  px-5">
			<div className="w-full lg:max-w-7xl mx-auto  py-10">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-darkBg">
					<div className="w-full text-sm lg:text-base">
                        {
                            faqs?.map(faq=><div key={faq._id} className="collapse collapse-arrow bg-white mb-3">
							<input type="checkbox" name="my-accordion-2" />
							<div className="collapse-title font-medium">
								{faq?.faqQus}
							</div>
							<div className="collapse-content">
								<p>{faq?.faqAns}</p>
							</div>
						</div>)
                        }
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
