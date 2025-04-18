import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimateTitleProps {
    title: string;
    containerclass?: string;
    id?: string;
}

const Animatetitle: React.FC<AnimateTitleProps> = ({
    title,
    containerclass,
    id,
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleanimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            });
            titleanimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power2.inOut",
                stagger: 0.02,
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                id={id}
                className={`animated-title ${containerclass}`}
            >
                {title.split("<br />").map((line, index) => (
                    <div
                        key={index}
                        className="flex-center max-w-full flex-wrap
                        gap-2 px-10 md:gap-3"
                    >
                        {line.split(" ").map((word, i) => (
                            <span
                                key={i}
                                className="animated-word" 
                                dangerouslySetInnerHTML={{ __html: word.trim() }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Animatetitle;
