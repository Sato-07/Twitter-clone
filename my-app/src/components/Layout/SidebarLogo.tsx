import { useRouter } from "next/router"
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () =>{

    const router = useRouter();



    return(
        <div
        onClick={()=> router.push('/')}
        className=' p-1 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition'
        >
            <BsTwitter size={8} color="white" />
        </div>
    )
}

export default SidebarLogo