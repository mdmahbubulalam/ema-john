import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => (
	<div className="header text-center mt-1">
		<img src={logo} alt="" />
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/shop">
								Shop
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/review">
								Order Review
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/inventory">
								Manage Inventory
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
);

export default Header;
