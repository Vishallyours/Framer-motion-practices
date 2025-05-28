import { motion } from 'framer-motion'
import { useState } from 'react'
function ToggleButton() {
    
    const [isToggle, setIsToggle] = useState(false);        
    const toggleButton = () => {
        if(isToggle){
            setIsToggle(true);
        } else {
            setIsToggle(false)
        }
        setIsToggle(!isToggle)
        }
        
return (

    <div className='flex h-screen justify-center items-center'>

        <motion.div 
        layout
        transition={{duration: 0.1 , ease:"easeOut" , type: 'spring'}}
        data-displaced={isToggle}
        onClick={toggleButton}
        
        className='flex w-28 h-20 rounded-full bg-gray-500 p-2 justify-start items-center
        data-[displaced=true]:justify-end
        
        '>
            <motion.div
            layout
            className='bg-gray-100 rounded-full w-16 h-16
            
            '>

            </motion.div>
        </motion.div>
    </div>
    )
}

export default ToggleButton
