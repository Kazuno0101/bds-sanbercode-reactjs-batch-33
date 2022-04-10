import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { JobProvider } from './Context/JobContext';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

import Login from './Component/Auth/login';
import Register from './Component/Auth/register';
import Forget from './Component/Auth/forget';

import About from './Component/Body/about';
import Body from './Component/Body';
import Detail from './Component/Body/detail';
import Search from './Component/Body/search';

import Dashboard from './Component/Dashboard';
import JobList from './Component/Dashboard/list-job';
import JobForm from './Component/Dashboard/form-job';
import Profile from './Component/Dashboard/profile';
import JobSearch from './Component/Dashboard/search';

function App() {
	const DashboardRoute = ({ ...props }) => {
		if (Cookies.get('token') === undefined) {
			return <Redirect to={'/login'} />;
		} else if (Cookies.get('token') !== undefined) {
			return <Route {...props} />;
		}
	};

	const AuthRoute = ({ ...props }) => {
		if (Cookies.get('token') !== undefined) {
			return <Redirect to={'/dashboard'} />;
		} else if (Cookies.get('token') === undefined) {
			return <Route {...props} />;
		}
	};

	return (
		<>
			<JobProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Body} />
						<Route exact path="/job-vacancy/:id" component={Detail} />
						<Route path="/about" component={About} />
						<Route path="/search/:s" component={Search} />

						<DashboardRoute exact path="/dashboard" component={Dashboard} />
						<DashboardRoute exact path="/dashboard/list-job-vacancy" component={JobList} />
						<DashboardRoute exact path="/dashboard/list-job-vacancy/:s" component={JobSearch} />
						<DashboardRoute exact path="/dashboard/list-job-vacancy/form" component={JobForm} />
						<DashboardRoute exact path="/dashboard/list-job-vacancy/form/:id" component={JobForm} />
						<DashboardRoute exact path="/profile" component={Profile} />
						<DashboardRoute path="/change-password" component={Forget} />

						<AuthRoute path="/login" component={Login} />
						<AuthRoute path="/register" component={Register} />
					</Switch>
				</Router>
			</JobProvider>
		</>
	);
}

export default App;
