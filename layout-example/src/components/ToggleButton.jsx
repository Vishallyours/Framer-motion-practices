import { motion } from 'framer-motion'
import { useState } from 'react'
function ToggleButton() {
    
    const [isToggle, setIsToggle] = useState(false);        
    const toggleButton = () => {
       setIsToggle(prev => !prev);
 }
        
        const moon = <img src="./moon.png" alt="" />
        const sun = <img src="./sun.png" alt="" />
return (

    <div 
    className={`flex h-screen justify-center items-center
    ${isToggle ? 'bg-white': "bg-black" }
    `}>

        <motion.div 
        layout
        data-displaced={isToggle}
        onClick={toggleButton}
        
        className={`flex w-36 h-20 rounded-full  bg-linear-120  p-2 justify-start items-center select-none
        data-[displaced=true]:justify-end
        ${isToggle ? "bg-black ": "bg-white" }
        `}>
            <motion.div
            layout 
            transition={{type:"spring",stiffness:700 , damping:30}}  
            
            className={`rounded-full w-16 h-16
            }`}
            
            >
                {
                    isToggle ? sun : moon
                }
            </motion.div>
        </motion.div>
    </div>
    )
}

export default ToggleButton
