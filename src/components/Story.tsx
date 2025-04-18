import { useRef } from "react"
import Animatetitle from "./Animate-title"
import gsap from "gsap";

export const Story = () =>{
    const frameRef = useRef<HTMLImageElement | null>(null);
    const handleMouseleave = () =>{
        const element = frameRef.current;
        gsap.to(element,{
            duration: 0.3,
            rotationX: 0,
            rotationY: 0,
            ease: "power1.out",
        })
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>{
        const {clientX, clientY} = e;
        const element = frameRef.current;
        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element,{
            duration: 0.3,
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 500,
            ease: "power1.out",
        })
    }
    return(
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50
        ">
            <div className="flex size-full flex-col items-center
            py-10 pb-24">
                <p
                className="font-general text-sm uppercase md:text-[10px"
                > The multiversal ip world</p>

                <div className="relative size-full">
                    <Animatetitle
                    title="The st<b>o</b>ry of <br />a hidden real<b>m</b>"
                    containerclass="mt-5 pointer-events-none mix-blend-difference
                    relative z-10"
                    id="#story"
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-cotent">
                               <img
                               ref={frameRef}
                               onMouseLeave={handleMouseleave}
                               onMouseUp={handleMouseleave}
                               onMouseEnter={handleMouseleave}
                               onMouseMove={handleMouseMove}
                               src="/img/entrance.webp"
                               alt="entrance"
                               className="object-contain"
                               /> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}