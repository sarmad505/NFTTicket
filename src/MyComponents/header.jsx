import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import image from '../logo.svg'


export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true
        }
    }
    return (
        <div className='bg-zinc-900 border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src={image} alt='NFTix'
                        className='h-16 cursor-pointer'
                        onClick={() => navigate("/")}
                    />


                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"
                            }`} onClick={() => navigate("/")}
                        >Home</li>


                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                 border-b-transparent ${pathMatchRoute("/events") && "text-black border-b-red-500"}`}
                            onClick={() => navigate("/events")}>Events</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                 border-b-transparent ${pathMatchRoute("/book-tickets") && "text-black border-b-red-500"}`}
                            onClick={() => navigate("book-tickets")}>BookTickets</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}