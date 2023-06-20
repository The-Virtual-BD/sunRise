import Footer from "../components/sharedPage/Footer";
import Header from "../components/sharedPage/Header";
import "../styles/globals.css";
import "../styles/team.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default MyApp;
