import { useState , useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function ScaleButton() {
  const menuIcon = <img src="./close.png" alt="" />;
  const closeIcon = <svg 
            className='block'
            width="30" height="14" viewBox="0 0 38 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 13L37 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>;
  
  const [isOpen, setIsOpen] = useState(false)
  const [shouldCenter, setShouldCenter] = useState(false)
  const [showContent, setShowContent] = useState(false) 
  
  const handleClick = () =>{
    if (isOpen) {
      setShouldCenter(true) 
      setShowContent(false) 
    } else {
      setShouldCenter(false)
    }
  setIsOpen(!isOpen)
    }

return (
<div className='flex justify-start flex-col items-end p-4 gap-4 bg-gray-900 w-screen h-screen'>

    <motion.div 
    layout
    transition={{duration: 1.5 ,ease:"easeIn"}}
    onClick={handleClick}
    className={`bg-transparent w-8 h-8 rounded-full flex items-center justify-center cursor-pointer select-none
                ${isOpen ? 'bg-white/40' : ''}
    `}>
        { isOpen ? menuIcon : closeIcon }

</motion.div>


 <motion.div 
  layout
  data-expanded={isOpen}
  animate={{
          width: isOpen ? '100%' : '0rem',
          height: isOpen ? '100%' : '0rem',
          borderRadius: isOpen ? '1rem' : '3rem',
          backgroundColor: isOpen ? 'black': 'gray' ,
          opacity: isOpen ? '100%' : '1%' ,
        }}
        
  // // onClick={}
  // onAnimationComplete={() => {
  // if (shouldCenter && !isOpen) {
  //   setShouldCenter(false)}
  // }}
  transition={{duration: 0.5 ,ease:"easeIn"}}
  className={` flex border border-black/50   
            ${
              isOpen || shouldCenter 
              ? "justify-end items-start" 
              :"items-center justify-center  "}
            `}
            
  //show content after a the div transition is completed  
  onAnimationComplete = {() => { 
      if (isOpen) {
        setShowContent(true) 
    } 
  }} >

{showContent && (

  <div className = 'flex flex-col p-16 gap-8 m-16 text-white text-balance '>
  <h1>Header</h1>

  <h3>SubHeader</h3>
 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga consequuntur, voluptate ad qui voluptatem, illum, quod quos voluptas vero assumenda doloremque omnis dolores dolorem laboriosam dignissimos velit? Culpa, similique accusantium amet vitae delectus ipsa eaque sint quos.</p>

  <p> Hi </p>
  
  </div>

)}

 </motion.div>
</div>
        
    )
}

export default ScaleButton
