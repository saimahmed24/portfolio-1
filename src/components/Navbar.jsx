import { div } from "framer-motion/client";
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsTwitterX, BsYoutube } from "react-icons/bs"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="fixed z-10 top-0 flex items-center w-full justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 ">shahmeerx</a>
      <ul className="hidden md:flex gap-10">
        <a href="#home" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Home
          </li>
        </a>
        <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Tech
          </li>
        </a>
        <a href="#project" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Project
          </li>
        </a>
        <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Contact
          </li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100 ">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300  hover:text-sky-500 hover:opacity-100 ">
          <BsTwitter />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100 ">
          <BsGithub />
        </li>
      </ul>

     
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )
      }

      {isOpen && (
        <div className={`fixed right-0 top-[84px] md:hidden flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Home
              </li>
            </a>
            <a href="#project" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Project
              </li>
            </a>
            <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Contact
              </li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100 ">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300  hover:text-sky-500 hover:opacity-100 ">
          <BsTwitter />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100 ">
          <BsGithub />
        </li>
      </ul>
        </div>
      )
      }

    </nav>
  )
}

export default Navbar
