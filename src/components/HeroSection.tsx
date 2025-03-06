import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [hasClick, setHasClick] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 3;

    const handleVideoLoad = () => {
        setLoadedVideos((prevVideo) => prevVideo + 1);
    };

    const upcomingVideos = (currentIndex % totalVideos) + 1;

    const nextVideoref = useRef(null);

    const handleMinivideoclick = () => {
        setHasClick(true);
        setcurrentIndex(upcomingVideos);
    };

    const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-screen w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-full w-full overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute
                    z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMinivideoclick} className="origin-center
                        scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100
                        
                        ">
                            <video
                                ref={nextVideoref}
                                src={getVideoSrc(upcomingVideos)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>


                    <video
                        ref={nextVideoref}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="nextVideo"
                        className="absolute-center invisible absolute z-20  size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />

                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 w-full h-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                <h1 className="hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
                    G<b>a</b>ming
                </h1>

                <div className="absolute left-0 top-0 z-40 w-full h-full ">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="hero-heading text-blue-100">
                            redefi<b>n</b>e
                        </h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the Metgame Layer <br /> Unliash the Play Economy
                        </p>
                        <Button 
                        id = "watch-trailer"
                        title = "Watch Trailer"
                        leftIcon={TiLocationArrow}
                        containerClass = "bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
            <h1 className="hero-heading absolute bottom-5 right-5 text-black">
                    G<b>a</b>ming
                </h1>
        </div>
    );
};

export default Hero;