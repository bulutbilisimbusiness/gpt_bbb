import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Menu = () => {
	return (
		<>
			<p>
				<a href="#home"></a>Home
			</p>
			<p>
				<a href="#wgpt4"></a>What is GPT?
			</p>
			<p>
				<a href="#possibility">Open AI</a>
			</p>
			<p>
				<a href="#features">Case Studies</a>
			</p>
			<p>
				<a href="#blog">Library</a>
			</p>
		</>
	);
};
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="gpt4__navbar">
			<div className="gpt4__navbar-links">
				<div className="gpt4__navbar-links_logo">
					<img src={logo} alt={logo} />
				</div>
				<div className="gpt4__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt4__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="gpt4__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="gpt4__navbar-menu_container scale-up-center">
						<div className="gpt4__navbar-menu_container-links">
							<Menu />
							<div className="gpt4__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
