import image from "/public/pfp.png"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div 
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]" />
        </motion.div>
        <motion.div
        initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">SHAHMEER TIGER</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to bg-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">Professional Yapper</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">I’m a professional yapper. My job is basically to turn every silence into a monologue and every conversation into a TED Talk! My boss says I have a real talent for talking… but I think it’s just a long-standing relationship with coffee and a lack of ‘mute’ buttons in my life!</p>
        </motion.div>
      </div>
    </div>

  )
}

export default Hero
