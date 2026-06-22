import Header from "./header";
import IconContainer from "./IconContainer";


function HomePage() {

    let icons = [
        { name: " New Patients", icon: "fa-solid fa-user", iconColor: "text-blue-600", bgColor:"bg-blue-300"},
        { name: " Patients List", icon: "fa-solid fa-users", iconColor: "text-violet-600", bgColor:"bg-violet-300"},
        { name: "Appointments", icon: "fa-solid fa-calendar", iconColor: "text-yellow-600", bgColor:"bg-yellow-200"},
        { name: "Billing", icon: "fa-solid fa-file-invoice-dollar", iconColor: "text-green-700", bgColor:"bg-green-300"},
        { name: "Reports", icon: "fa-solid fa-tooth", iconColor: "text-red-600", bgColor:"bg-red-300"},
        { name: "Settings", icon: "fa-solid fa-gear", iconColor: "text-gray-700", bgColor:"bg-gray-300"},
    ];

    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Header />
            <div className="flex flex-wrap justify-center items-center mt-10">
                {icons.map((item,idx)=>{
                    return (<IconContainer key={idx} name={item.name} icon={item.icon} iconColor={item.iconColor} bgColor={item.bgColor} />  )
                })}
            </div>
        </div>
    )
}


export default HomePage;