import { useRef, useState } from "react"
import { preview } from "vite";

const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [hasClick, setHasClick] = useState(false);
    const [isLoading, setIsLoading ] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;

    const hanbleVideoLoad = () => {
        setLoadedVideos((prevVideo) => prevVideo + 1)
    }

    const upcomingVideos = (currentIndex % totalVideos) + 1

    const nextVideoref = useRef(null);

    const handleMinivideoclick = () => {
        setHasClick(true);

        setcurrentIndex((prevIndex) => prevIndex + 1);

    }

   const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`

    return(
        <div className="relative h-dvh w-screen overflow-x-hidden">
           <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden
            rounded-lg bg-blue-75 ">
                <div>
                    <div className="mask-clip-path absolute-center absolute
                    z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                       <div onClick={handleMinivideoclick} className="origin-center
                        scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100
                        
                        ">
                        <video
                        ref = {nextVideoref}
                        src = {getVideoSrc(currentIndex + 1)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={hanbleVideoLoad}
                        />
                       </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Hero