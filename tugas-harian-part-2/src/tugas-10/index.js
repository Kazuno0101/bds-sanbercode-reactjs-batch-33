import React from 'react';
import '../App.css';
import Logo from '../../src/Assets/image/logo.png';

const ListComponent = (props) => {
	return (
		<div class="input-checkbox">
			<input type="checkbox" />
			<p>{props.listData}</p>
		</div>
	);
};

const List10 = () => {
	return (
		<div className="card2">
			<img src={Logo} />
			<p>THINGS TO DO</p>
			<small>During Bootcamp in Sanbercode</small>
			<hr />

			<ListComponent listData="Belajar Git & CLI" />
			<ListComponent listData="Belajar HTML & CSS" />
			<ListComponent listData="Belajar Javascript" />
			<ListComponent listData="Belajar ReactJS Dasar" />
			<ListComponent listData="Belajar ReactJS Advance" />

			<button>Send</button>
		</div>
	);
};

export default List10;
