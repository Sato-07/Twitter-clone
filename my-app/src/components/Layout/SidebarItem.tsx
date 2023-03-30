import {IconType} from 'react-icons'

interface SideBarItemProps{
    label:string;
    href:string;
    icon:IconType
    onClick?:() => void;

}



const SideBarItem :React.FC<SideBarItemProps>= ({label,href,icon:Icon,onClick}) =>{
    return (
    <div className='flex flex-row items-center'>
        <div className='relative rounded-full w-14 flex items-center justify-center p-2
        hover:bg-slate-300 hove: bg-opacity-0 cursor-pointer lg:hidden'>
            <Icon size={6} color="white"/> 
        </div>

    </div>
    )
}

export default SideBarItem