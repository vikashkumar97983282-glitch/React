import React from "react";
import Header from "./header";
import IconContainer from "./IconContainer";


function HomePage() {

    let icons = [
        { name: " New Patients", icon: "fa-solid fa-user" },
        { name: " Patients List", icon: "fa-solid fa-user" },
        { name: "Appointments", icon: "fa-solid fa-calendar" },
        { name: "Billing", icon: "fa-solid fa-file-invoice-dollar" },
        { name: "Reports", icon: "fa-solid fa-tooth" },
        { name: "Settings", icon: "fa-solid fa-tooth" },
    ];

    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Header />
            <div className="flex flex-wrap justify-center items-center">
                {icons.map((item,idx)=>{
                    return (<IconContainer key={idx} name={item.name} icon={item.icon} />  )
                })}
            </div>
        </div>
    )
}


export default HomePage;