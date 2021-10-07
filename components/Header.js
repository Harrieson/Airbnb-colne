import Image from 'next/image';
import { SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
     } from '@heroicons/react/solid'


function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10'>
           {/* Left Div */}
           <div className='relative flex items-center h-10 my-auto cursor-pointer'>
                <Image src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
           </div>

           {/* Middle Div */}
           <div className='flex items-center md:border-2 rounded-full py-2
           md:shadow-sm '>
               <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-700' 
               type="text" placeholder="Start your search" />
               <SearchIcon className='hidden md:inline-flex h-8
                text-white bg-red-500 rounded-full p-2 cursor-pointer md:mx-2  ' />
           </div>

           {/* Right Div */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>

        </header>
    )
}

export default Header