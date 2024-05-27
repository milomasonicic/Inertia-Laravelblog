import { useState } from "react";
import "../../../css/app.css";
import { Link } from '@inertiajs/react'

export default function NavFront(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <div className="bg-gray-200">
           
            
            <ul className="flex justify-between max-w-[1140px] mx-auto p-4">
                <li>
                <a href="">Logo</a>
                </li>
                <li className="md:hidden">
                    <button onClick={toggleMenu}>
                    MENU
                    </button>
                </li>
                
                <li className="hidden md:block">
                    <Link className='text-slate-600 hover:text-slate-800 px-5 '  href={`/tag/politika`}>Politika</Link>            
                </li>
                <li className="hidden md:block">
                    <Link className='text-slate-600 hover:text-slate-800 px-5 '  href={`/tag/ekonomija`}>Ekonomija</Link>            
            
                </li>
                <li className="hidden md:block">
                    <Link className='text-slate-600 hover:text-slate-800 px-5 '  href={`/tag/kultura`}>Kultura</Link>            
                
                </li>
                <li className="hidden md:block">
                
                    <Link className='text-slate-600 hover:text-slate-800 px-5 '  href={`/tag/sport`}>Sport</Link>            
                </li>
                
                
            </ul>

           

            <ul id={menuOpen ? 'show' : 'hide' }>
            <li className="">Politika</li>
                <li className="">Ekonomija</li>
                <li className="">Kultura</li>
                <li className="">Sport</li>
                <li className="">Podkast</li>
                <li className="">Kontakt</li>

            </ul>
            
            

            
        </div>
    )
}