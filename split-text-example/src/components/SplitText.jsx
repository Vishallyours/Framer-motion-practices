import {useEffect , useRef} from 'react'
import {animate , stagger} from 'motion'
import { splitText } from "motion-plus"

export default function SplitText() {
    
    const containerRef = useRef(null);

    useEffect(()=> {
        document.fonts.ready.then(() => {
            if(!containerRef.current)return

            containerRef.current.style.visibility = 'visible'
    
    
    const { words } = splitText(
        containerRef.current.querySelector("h1"))

 animate(
    words,
    { opacity: [0, 1], y: [10 , 0] },
    {
        type: "spring",
        duration:2,
        bounce: 0 ,
        delay: stagger(0.05),
    }
 )
})
}, [])
    return (
          <div className="container" ref={containerRef}>
            <span>
                Turning ideas into digital experiences.
            </span>

            <h1 className="h1">
                Full Stack Developer
            </h1>
            <span>
                with a knack for building end-to-end solutions.
            </span>

                <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    )
}