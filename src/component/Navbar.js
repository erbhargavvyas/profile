import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Navbar() {
	return (
	<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
		<div className="container-fluid">
			<h1> Bhargav Vyas</h1>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">Home</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	);
}

export default Navbar;