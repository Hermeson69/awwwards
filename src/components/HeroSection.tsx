import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClick, setHasClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4; 

  const handleVideoLoad = () => {
    setLoadedVideos((prevVideo) => prevVideo + 1);
  };

  const upcomingVideos = (currentIndex % totalVideos) + 1;

  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const currentVideoRef = useRef<HTMLVideoElement>(null);

  const handleMinivideoclick = () => {
    setHasClick(true);
    setcurrentIndex(upcomingVideos);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh(); 
    }
  }, [isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

  useGSAP(
    () => {
      if (hasClick && nextVideoRef.current && currentVideoRef.current) {
        gsap.set(nextVideoRef.current, { visibility: 'visible' });
        gsap.to(nextVideoRef.current, {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => {
            nextVideoRef.current?.play();
          },
        });
        gsap.from(currentVideoRef.current, {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(
    () => {
      if (isLoading) return; // Skip animation while loading
      gsap.set('#video-frame', {
        clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
        borderRadius: '0% 0% 40% 10%',
      });
      gsap.from('#video-frame', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderRadius: '0% 0% 0% 0%',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#video-frame',
          start: 'center center',
          end: 'bottom center',
          scrub: true,
        },
      });
    },
    [isLoading]
  );

  return (
    <div id="nexus" className="relative h-screen w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-screen w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMinivideoclick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={currentVideoRef}
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
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            preload="auto"
            id="nextVideo"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
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

        <div className="absolute left-0 top-0 z-40 w-full h-full">
          <div className="mt-18 px-5 sm:px-10">
            <h1 className="hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metgame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;