function Header() {
    return (
        <div>
            <div className="bg-teal-500 h-16 flex items-center justify-center relative">
                <i className="fa-solid fa-bars absolute left-4 text-white text-2xl hover:cursor-pointer"></i>
                <i className="fa-solid fa-bell absolute right-4 text-white text-2xl hover:cursor-pointer"></i>
            </div>
            <div className=" h-20 flex items-center justify-center flex-col">
                <h1 className=" text-green-700 font-bold text-3xl">Smart Dental Care</h1> 
                <p className=" text-gray-600">Patient Record System</p>
            </div>
        </div>
    )
}

export default Header;