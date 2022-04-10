import Nav from '../Navbar';
import Footer from '../Footer';
function HomeTemplate(props) {
	return (
		<>
			<Nav />
			{props.children}
			<Footer />
		</>
	);
}

export default HomeTemplate;
