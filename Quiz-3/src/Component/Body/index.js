import React from 'react';
import Home from './home';
import MobileList from './mobilelist';
import MobileForm from './mobileform';
import About from './about';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
const Body = () => {
	return (
		<div class="row">
			<div class="section">
				<div class="card">
					<Router>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/mobile-list">
								<MobileList />
							</Route>
							<Route path="/mobile-form">
								<MobileForm />
							</Route>
							<Route exact path="/mobile-form/edit/:id">
								<MobileForm />
							</Route>
							<Route path="/search/:valueOfSearch">
								<Home />
							</Route>
							<Route path="/about">
								<About />
							</Route>
						</Switch>
					</Router>
				</div>
			</div>
		</div>
	);
};

export default Body;
