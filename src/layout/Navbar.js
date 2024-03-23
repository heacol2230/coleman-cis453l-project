import { NavLink } from "react-router-dom";

import HomeIcon from "../assets/Home.svg";
import LoginIcon from "../assets/Login.svg";
import SubscriptionsIcon from "../assets/Subscriptions.svg";
import UserHomePageIcon from "../assets/User_Homepage.svg";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-8 lg:px-32">
            <NavLink className="hover:shadow-md hover:scale-[1.2]" to={`/`}>
                <img src={HomeIcon} alt=""/>
            </NavLink>
            <NavLink className="hover:shadow-md hover:scale-[1.2]" to={`/login`}>
                <img src={LoginIcon} alt=""/>
            </NavLink>
            <NavLink className="hover:shadow-md hover:scale-[1.2]" to={`/user-homepage`}>
                <img src={UserHomePageIcon} alt=""/>
            </NavLink>
            <NavLink className="hover:shadow-md hover:scale-[1.2]" to={`/subscriptions`}>
                <img src={SubscriptionsIcon} alt=""/>
            </NavLink>
        </div>
    )
}

export default Navbar;