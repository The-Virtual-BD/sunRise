import Footer from "../components/sharedPage/Footer";
import Header from "../components/sharedPage/Header";
import "../styles/globals.css";
import "../styles/team.css";
import "../styles/services.css";
import "../styles/workCard.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import CrispChat from "../components/sharedPage/CrispChat";
import Navbar from "../components/sharedPage/Navbar";
import DataCollection from "../components/Context/Context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	/* useEffect(() => {
		AOS.init();
	}, []); */

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<DataCollection>
					<div>
						<CrispChat />
						<Navbar />
						<Component {...pageProps} />
						<ToastContainer />
						<Footer />
					</div>
				</DataCollection>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
