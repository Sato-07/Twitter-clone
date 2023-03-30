import Sidebar from "./Layout/Sidebar";

interface LayoutProps{
    children:React.ReactNode;
}




const Layout: React.FC<LayoutProps> = ({ children }) =>{
    return(
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-0 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                    <Sidebar/>
                    <div className="col-span-2 lg:col-span-2 border-x-[0.5px] border-neutral-500">
                        {children}
                    </div>

                </div>
            </div>
        </div>)
}

export default Layout