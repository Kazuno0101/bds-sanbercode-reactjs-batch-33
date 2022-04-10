import Nav from '../Dashboard/Nav';
import Side from '../Dashboard/Side';

function AdminTemplate(props) {
	return (
		<>
			<Nav />
			<Side content={props.children} />
		</>
	);
}

export default AdminTemplate;
