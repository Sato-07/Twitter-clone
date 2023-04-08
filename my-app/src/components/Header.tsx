import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps{
    label: string;
    showBackArrow?:boolean;
}





const Header: React.FC<HeaderProps> = ({label,showBackArrow}) => {


    const router = useRouter();

    // Define a callback function that uses the router.back() method to navigate to the previous page in the user's browsing history
    const handelBack = useCallback (() => {
        router.back();
    },[router]);
    

    return(
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
                {
                    showBackArrow && (
                        <BiArrowBack onClick={handelBack} color='white' size={20}
                        className=" cursor-pointer hover:opacity-70 transition"/>
                    )
                }
                <h1 className=" text-white text-xl">{label}</h1>
            </div>
        </div>
    )
}

export default Header 