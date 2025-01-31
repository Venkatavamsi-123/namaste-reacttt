import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useSelector } from 'react-redux'; // Corrected import

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlinestatus();
    const cartItems = useSelector((store) => store.cart.items); // Assuming cartItems is correctly selected from the Redux store

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
            {/* Logo Section */}
            <div className="logo-container">
                <img src={LOGO_URL} alt="Logo" className="w-32 h-auto" />
            </div>

            {/* Navigation Section */}
            <nav className="nav-items">
                <ul className="flex items-center space-x-4">
                    {/* Online Status */}
                    <li className="text-sm font-medium">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    {/* Navigation Links */}
                    <li>
                        <Link to="/" className="text-sm hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-sm hover:text-gray-300">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-sm hover:text-gray-300">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="text-sm hover:text-gray-300">
                            Cart - ({cartItems.length} items)
                        </Link>
                    </li>
                    {/* Login/Logout Button */}
                    <li>
                        <button 
                            className="py-1 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                            onClick={() => setbtnNameReact(prev => (prev === "Login" ? "Logout" : "Login"))}
                        >
                            {btnNameReact}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
