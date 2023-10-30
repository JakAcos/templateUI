
const Sidebar = () => {
    return (
        <header className="flex align-center bg-white text-black w-full h-16 items-center">
            <div className="flex w-64 justify-around">
                <p>Opren.io</p>
            </div>
            <div className="flex-grow flex align-center justify-center space-x-4">
                <p className="cursor-pointer">home</p>
                <p className="cursor-pointer">about</p>
                <p className="cursor-pointer">contact</p>
            </div>
            <div className="flex my-auto w-64">                  
                <button className="my-auto flex cursor-pointer justify-center bg-[#536976] rounded-lg px-[1.4rem] py-[0.6rem] text-center text-base text-white"type="buttom">
                    Get Started
                </button> 
            </div>
        </header>
    );
};

export default Sidebar;
