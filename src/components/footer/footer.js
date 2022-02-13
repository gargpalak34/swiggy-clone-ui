import "./footer.css";
import React from "react";
import google from "../restaurant/googleplay.webp";
import appstore from "../restaurant/appstore.webp";
import swiggy from "./swiggywhite.png";
// import cities from "./cities";
import result from "./cities";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function myFunc(){
	return result.map(currentList => {
		return (
			<div className={`row`}>
				{currentList.map(currentCity => {
					// eslint-disable-next-line
					return (
						<div>
							<a href="/">{currentCity}</a>
						</div>
					);
				})}
			</div>
		);
	});
}
function Footer() {
	return (
		<footer>
            <About />
			<div id="city-section">
				<hr />
			<div id="cities">
				<h4>WE DELIVER TO</h4>
				<div className="flexed_cities">
					{ myFunc() }
				</div>
			</div>
			<hr />
			</div>
			<div id="logos">
				<img src={swiggy} alt="swiggylogo" />
				<p> &copy; 2021 Swiggy </p>
				<div id="sociallogos">
					<FaFacebookF />
					<FaPinterest />
					<FaInstagram />
					<FaTwitter />
				</div>
			</div>
		</footer>
	);
}

const About = () => {
	return (
		<div id="about">
			<div>
				<h4>COMPANY</h4>
				<p>About us</p>
				<p>Team</p>
				<p>Careers</p>
				<p>Swiggy Blog</p>
				<p>Bug Bounty</p>
				<p>Swiggy Super</p>
				<p>Swiggy Corporate</p>
				<p>Swiggy Instamart</p>
			</div>
			<div>
				<h4>CONTACT</h4>
				<p>Help &#38; Support</p>
				<p>Partner with us</p>
				<p>Ride with us</p>
			</div>
			<div>
				<h4>LEGAL</h4>
				<p>Terms &#38; Conditions</p>
				<p>Refund &#38; Cancellation</p>
				<p>Privacy Policy</p>
				<p>Cookie Policy</p>
				<p>Offer Terms</p>
				<p>Phishing &#38; Fraud</p>
			</div>
			<div className="downlogo">
				<img src={google} alt="googleplay" />
				<img src={appstore} alt="appstore" />
			</div>
		</div>
	);
};

export default Footer;
