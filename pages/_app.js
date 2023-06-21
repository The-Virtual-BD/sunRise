import Footer from "../components/sharedPage/Footer";
import Header from "../components/sharedPage/Header";
import "../styles/globals.css";
import "../styles/team.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import CrispChat from "../components/sharedPage/CrispChat"

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>

			<div>
				<CrispChat />
				<Header />
				<Component {...pageProps} />
				<ToastContainer />
				<Footer />
			</div>
		</>

	);
}

export default MyApp;


///<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="27765c31-8c13-47c2-8226-1ff540e53001";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
