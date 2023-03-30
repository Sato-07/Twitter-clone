import {BsBellFill, BsHouseFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import SideBarItem from './SidebarItem'
import SidebarLogo from './SidebarLogo'


const Sidebar = () => {

    const items = [
        {
            label:'Home',
            href:'/',
            icon: BsHouseFill

        },
        {
            label:'Notifications',
            href:'/notifications',
            icon: BsBellFill
        },
        {
            label:'Profile',
            href:'/user/123',
            icon: FaUser
        }

    ]



    return(
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]'>
                <SidebarLogo/>
                {items.map((item) => (
                    <SideBarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                    />
                ))}
                <SideBarItem onClick={() => {}} icon={BiLogOut} label="Logout"/>

            </div>
        </div>

    </div>
    )

}

export default Sidebar