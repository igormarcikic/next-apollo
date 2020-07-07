import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import Footer from '@/components/shared/Footer';


const MyApp = ({ Component, pageProps }) => {
	console.log(pageProps)
	return (
		<div className="portfolio-app">
			<Navbar />
			{Component.name === "Home" && <Hero />}
			<div className="container">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	)
};

// MyApp.getInitialProps = async() => {
// 	return { pageProps: {appData: 'Sdasdas'}}
// }

export const getStaticProps = async () => {

	return {
		pageProps: {
			appData: "Hello _app Comp"
		}
	}
};

export default MyApp;