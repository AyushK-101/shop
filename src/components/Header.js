import Image from "next/image"
import prof from "../public/amazon.png"
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const {data: session, status} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
    {/* Top nav */}
    <div className="flex items-center bg-cyan-900 p-1 flex-grow py-2">
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          onClick={() => router.push('/')}
          src={prof}
          // src="https://links.papareact.com/f90"
          width={150}
          height={40}
          style={{objectFit:"contain"}}
          className="cursor-pointer"
        />
      </div>
        {/* Seacrh */}
        <div className="mx-4 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

            <div onClick={() => (session ? signOut() : signIn())} className="cursor-pointer hover:underline" >
                <p className="hover:underline">
                  {session ? `Hello, ${session?.user?.name}`: "Sign In"}
                  
                </p> 
            

                
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
                
            <div onClick={() => router.push('/orders')} className="cursor-pointer" >
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
                
            <div onClick={() => router.push('/checkout')} className="relative flex items-center cursor-pointer">
                
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                  {items.length}
                </span>
                
                <ShoppingCartIcon className="h-10" />
                <p className="hidden md:inline font-extrabold md:text-sm mt-4">My Cart</p>
            </div>
        </div>
      </div>
         
         
      
    
    {/* Botttom nav */}
      <div className="flex items-center space-x-5 p-2 pl-6 bg-cyan-600 text-white text-sm">
        <p className="cursor-pointer flex items-center">
          <Bars4Icon className='h-6 mr-1' />
          All
        </p>
        <p className="cursor-pointer">Prime Video</p>
        <p className="cursor-pointer">Amazon Business</p>
        <p className="cursor-pointer">Today's Deals</p>
        <p className="cursor-pointer hidden lg:inline-flex">Electronics</p>
        <p className="cursor-pointer hidden lg:inline-flex">Food & Grocery</p>
        <p className="cursor-pointer hidden lg:inline-flex">Prime</p>
        <p className="cursor-pointer hidden lg:inline-flex">Buy Again</p>
        <p className="cursor-pointer hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="cursor-pointer hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header

