import React from 'react';
import Nav from './tugas-14/nav';

import List10 from './tugas-10/';
import List from './tugas-11/tugas11';
import Peserta from './tugas-12/tugas12';
import Mahasiswa from './tugas-13/Mahasiswa';
import Routes from './tugas-14/Mahasiswa';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './tugas-14/navContext';

function App() {
	return (
		<>
			<DarkModeProvider>
				<Router>
					<Nav />
					<Switch>
						<Route exact path="/">
							<List10 />
						</Route>
						<Route path="/tugas11">
							<List />
						</Route>
						<Route path="/tugas12">
							<Peserta />
						</Route>
						<Route path="/tugas13">
							<Mahasiswa />
						</Route>
						<Route path="/tugas14">
							<Routes />
						</Route>
					</Switch>
				</Router>
			</DarkModeProvider>
		</>
	);
}

export default App;
