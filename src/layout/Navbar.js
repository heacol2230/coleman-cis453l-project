import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks

import HomeIcon from "../assets/Home.svg";
import LoginIcon from "../assets/Login.svg";
import SubscriptionsIcon from "../assets/Subscriptions.svg";
import UserHomePageIcon from "../assets/User_Homepage.svg";

const Navbar = () => {
    const [fontSize, setFontSize] = useState('16px'); // State to hold the font size

    useEffect(() => {
        // Function to update font size based on screen width
        const updateFontSize = () => {
            if (window.innerWidth < 768) {
                setFontSize('14px'); // Adjust font size for smaller screens (e.g., mobile)
            } else {
                setFontSize('16px'); // Default font size for larger screens
            }
        };

        updateFontSize(); // Call the function initially

        // Event listener to update font size when the window is resized
        window.addEventListener('resize', updateFontSize);

        // Clean up event listener to prevent memory leaks
        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, []); // Run this effect only once when the component mounts

    return (
        <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-8 lg:px-32" style={{ fontSize: fontSize }}> {/* Apply dynamic font size */}
            <NavLink className="hover:shadow-md hover:scale-[1.2] mr-4" to={`/`}>
                <img src={HomeIcon} alt=""/>
            </NavLink>
            <NavLink className="hover:shadow-md hover:scale-[1.2] mr-4" to={`/login`}>
                <img src={LoginIcon} alt=""/>
            </NavLink>
            <NavLink className="hover:shadow-md hover:scale-[1.2] mr-4" to={`/user-homepage`}>
                <img src={UserHomePageIcon} alt=""/>
            </NavLink>
            <NavLink className="hover:shadow-md hover:scale-[1.2]" to={`/subscriptions`}>
                <img src={SubscriptionsIcon} alt=""/>
            </NavLink>
        </div>
    );
}

export default Navbar;
