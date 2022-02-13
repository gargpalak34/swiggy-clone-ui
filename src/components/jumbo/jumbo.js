import './jumbo.css'
import { BiCurrentLocation } from "react-icons/bi";
import nav_logo from './nav_logo.png';  //swiggy logo
import food from './food.jpeg';

function Jumbo(){
    return (
			<section className="container-fluid p-0 d-flex jumbo-container">
				<div className="first_div">
					<NavContent />
					<DescriptiveContent />
				</div>
				<div className="second_div">
					<img className="jumbo_img" src={food} alt="No img found" />
				</div>
			</section>
		);
}

const NavContent = () =>{
    return (
        <nav className='d-flex justify-content-between mb-5 align-items-center'>
            <div className="logo_container">
                <img src={nav_logo} alt="logo" />
            </div>
			<div className='d-flex'>
				<button id="loginBtn" className="px-sm-1 px-md-2 px-lg-4">Login</button>
	            <button id="signupBtn" className="px-sm-1 px-md-2 px-lg-4">Sign Up</button>
			</div>
        </nav>
    );
}
const DescriptiveContent = () => {
    return (
			<>
				<h1>Unexpected guests?</h1>
				<h3>Order food from favourite restaurants near you.</h3>
				<h5 id="small-text">
					Get your food items delivered to your doorstep with just a single click.
					<div><button id="order-now">Order Now</button></div>
				</h5>
				<div className="searchDiv">
					<input type="text" placeholder="Enter your delivery location"></input>
					<button id="locateBtn">
						<BiCurrentLocation />
						Locate Me
					</button>
					<button id="findBtn">FIND FOOD</button>
				</div>
				<p id="city-head">POPULAR CITIES IN INDIA</p>
				<p id="cities">
					<span>Ahmedabad</span> Banglore <span>Chennai</span> Delhi{" "}
					<span>Gurgaon</span> Hydrebad <span>Kolkata</span> Mumbai{" "}
					<span>Pune</span> &#38; more.
				</p>
			</>
		);
}

export default Jumbo;