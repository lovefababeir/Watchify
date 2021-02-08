import React from "react";
import logo from "../../assets/Logo/watchifylogo.png";
import "./Header.scss";
import uploadButton from "../../assets/Icons/SVG/Icon-upload.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div class="header__logo">
				<Link to="/" className="links">
					<img className="header__icon" src={logo} alt="Watchify Logo" />
				</Link>
				<Link to="/" className="links">
					<h1 className="header__logo-title">Watchify</h1>
				</Link>
			</div>
			<div className="header__cta-container">
				<input
					className="header__searchbar"
					type="text"
					alt="Type in here to search a video"
					placeholder="Search"
				></input>

				<Link to="/upload" className="links">
					<button className="header__button">
						<img src={uploadButton} alt="" /> UPLOAD
					</button>
				</Link>
				<img
					className="header__avatar"
					src={avatar}
					alt="Avatar of account owner"
				/>
			</div>
		</header>
	);
}

export default Header;
