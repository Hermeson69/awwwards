import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import Animatetitle from './animate-title'
gsap.registerPlugin(ScrollTrigger)

const About = () =>{
    useGSAP(()=>{
        const clipAnimation = gsap.timeline(
            {
                scrollTrigger:{
                    trigger: '#clip',
                    start: 'center center',
                    end: '+=800 center',
                    scrub: 0.5,
                    pin: true,
                    pinSpacing: true,
                }
            }
        )
        clipAnimation.to('.mask-clip-path',{
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })
    return (
        <div id = "about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col">
                <h2 className="font-general text-center text-sm uppercase md: text-[10px]">
                    Welcone to Zentry
                </h2>

                <Animatetitle 
                title={"Disc<b>o</b>ver the world´s <br /> l<b>a</b>rgest shared adventure"}
                containerclass={"mt-5 !text-black text-center"}
                />


                <div className="about-subtext">
                    <p>The Game fo Game begins-your life now an eoic MMORPG</p>
                    <p>Zentry unites every player from countless game and platforms</p>
                </div>
            </div>
            <div className="h-dvh w-screen "id="clip">
                <div className="mask-clip-path about-image">
                    <img
                    src="img/about.webp"
                    alt= "Backgroud"
                    className="absolut left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default About