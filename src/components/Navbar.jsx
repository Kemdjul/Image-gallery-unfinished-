import React, {useState} from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {setNav(!nav);}

  return (
    <div className="w-full flex flex-col justify-around items-center bg-[#F2EEEE] fixed pt-3 z-50">
        <div className="flex flex-row w-full justify-between items-center px-32">
            <img className="w-20" />

            <h1 className="text-[3.052rem] font-serif">Gallery Website</h1>

            <p></p>
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-5 border-y-2 border-black border-opacity-20 py-4 p-32">
            <div>
                <ul className="flex flex-row w-full justify-around items-center text-[1.25rem] font-sans">
                    <li className="mr-12">Naslovnica</li>
                    <li className="mr-12">Kategorije</li>
                    <li className="mr-12">O nama</li>
                    <li className="mr-12">Kontakt</li>
                </ul>
            </div>
            <input className="bg-gray-200 w-[444px] p-1 border-1 border-l-gray-800 font-sans" type="text" placeholder="Search images..." />
        </div>
    </div>
  )
}

export default Navbar