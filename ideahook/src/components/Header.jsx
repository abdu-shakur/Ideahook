import React from "react";
import { useLocation } from "react-router-dom";

    
function Header(){
    const location = useLocation();

    const displayLinks = () => {
        const {pathname} = location;
    
        const commonLinks = (
            <>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/about">About Us</a></li>
            </>
        )
        if (pathname == '/'){
            return(
                <>
                {commonLinks}
                <li><a href="/login">Login</a></li>
                <li><a href="/Signup">Signup</a></li>
                </>
            )

        }
        return commonLinks;
    }
        return(
            <nav className="flex justify-between space-x-9 m-3">
                <div className="flex  "><a href="/"><img className="h-8 p-2" src="./src/assets/logo1.png" alt="Ideahook Logo"/></a></div>
                <ul className="flex self-end space-x-4 md:flex text-primary">
                    {displayLinks()}
                </ul> 
            </nav>
        )
    }


export default Header;