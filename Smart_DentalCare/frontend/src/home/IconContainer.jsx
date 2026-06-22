function IconContainer(props) {
    return (
        <div className={`flex justify-center items-center space-x-4 ${props.bgColor} p-30 h-30 w-80 rounded-lg m-4 hover:scale-105 transition-transform duration-300 hover:cursor-pointer 
        shadow-lg shadow-gray-400`}>
            <h1 className="text-2xl font-bold">{props.name}</h1>
            <i className={`${props.icon} ${props.iconColor} text-4xl`}></i>    
        </div>
    )
}

export default IconContainer;