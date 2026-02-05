import React from "react";
import { Link, Outlet } from "react-router-dom";


function About(){
    return (
        <div>
            <h1>About page</h1>
            <div className="abt">
                <Link to='site'>Site</Link>
                <Link to='user'>User</Link>
                <Link to='admin'>Admin</Link>
                <Outlet></Outlet>
            </div>
            {/* <p>this is about page for route testing.</p> */}
        </div>
        
    )
}

export default About;