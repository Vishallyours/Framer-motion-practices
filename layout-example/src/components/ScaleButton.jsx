import React from 'react'
import { motion } from 'framer-motion'

function ScaleButton() {
        
  const [isOpen, setIsOpen] = useState(false)
  const [shouldCenter, setShouldCenter] = useState(false)
  
 const handleClick = () => {
    if (isOpen) {
      setShouldCenter(true) 
    } else {
      setShouldCenter(false)
    }
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex justify-end items-start p-4 bg-gray-900 w-screen h-screen'>

 <motion.div 
  layout
  data-expanded={isOpen}
  animate={{
          width: isOpen ? '100%' : '6rem',
          height: isOpen ? '100%' : '6rem',
          borderRadius: isOpen ? '1rem' : '3rem',
        }}
  onAnimationComplete={() => {
  if (shouldCenter && !isOpen) {
    setShouldCenter(false)}
  }}
  transition={{duration: 0.5 ,ease:"circInOut",type:"tween"}}
  className={` p-4 flex bg-white border border-black/50 cursor-pointer   
            ${
              isOpen || shouldCenter 
              ? "justify-end items-start" 
              :"items-center justify-center"}
            `}>
  
    <motion.div 
    layout
    onClick={handleClick}
    className='bg-gray-400 w-12 h-12 rounded-full flex items-center justify-center'>

    </motion.div>

 </motion.div>
   </div>
        
    )
}

export default ScaleButton
