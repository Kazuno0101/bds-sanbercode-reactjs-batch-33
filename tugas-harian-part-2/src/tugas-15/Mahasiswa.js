import React from 'react';
import { MahasiswaProvider } from './MahasiswaContext';
import MahasiswaList from './MahasiswaList';
import MahasiswaForm from './MahasiswaForm';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Mahasiswa = () => {
	return (
		<MahasiswaProvider>
			<Router>
				<Switch>
					<Route exact path="/tugas15">
						<MahasiswaList />
					</Route>
					<Route exact path="/tugas15/create">
						<MahasiswaForm />
					</Route>
				</Switch>
			</Router>
		</MahasiswaProvider>
	);
};
export default Mahasiswa;
