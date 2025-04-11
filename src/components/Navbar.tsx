import { useEffect, useRef } from "react";
import logo from "/img/logo.png"; 
import Button from "./Button";
import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"]; 

const Navbar = () => {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);
  }, []);
  const [isaudioplaying, setIsAudioPlaying] = useState(false);
  const [isaudioactivity, setIsAudioActivity] = useState(false);
  const navContainer = useRef(null);
  const audioElementoRef = useRef<HTMLAudioElement | null>(null);

const toggleAudioIndicator = () => {
  setIsAudioPlaying ((prev) => !prev);
  setIsAudioActivity((prev) => !prev);

}
useEffect(() => {
  const audio = audioElementoRef.current;
  if (audio) {
    if (isaudioplaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}, [isaudioplaying]);


  return (
    <div
      ref={navContainer}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex w-full items-center justify-between p-4">
          {}
          <div className="flex items-center gap-7">
            <img src={logo} alt="Logo" className="w-10 h-10 items-center bg-white rounded-4xl" />
            <Button
              id="product-button"
              title="Product"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          {}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLocaleLowerCase()}`} className="nav-hover-btn">
                {item}
              </a>
            ))}
            </div>


            <button className="ml-10 flex items-center space-x-0.5 hover: cursor-pointer" onClick={toggleAudioIndicator}>
              <audio  ref={audioElementoRef} src="/audio/loop.mp3" loop  className="hidden" />
                {[1, 2, 3, 4].map((bar) => (
                  <div key={bar} className={`indicator-line ${isaudioactivity ? 'active' : ' ' } `} 
                  style={{ animationDelay: `${bar * 0.1}s` }}
                  />

                 
                ))}
            
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;