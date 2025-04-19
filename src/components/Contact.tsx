import Button from "./Button";

interface ContactProps {
    src?: string;
    clipPath?: string;
}

const ImgClipBox = ({ src, clipPath }: ContactProps) => {
    return (
        <div className={clipPath}>
            <img src={src} alt="Contact" />
        </div>
    );
};

export const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div
        className="relative rounded-lg
        bg-black py-24 text-blue-50 sm:overflow-hidden    "
      >
        <div
          className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden
        sm:block lg:left-20 lg:w-96
        "
        >
            <ImgClipBox
                clipPath="contact-clip-path-1"
                src="img/contact-1.webp"
            />
            <ImgClipBox
                clipPath="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                src="img/contact-2.webp"
            />
        </div>
        <div
          className="absolute -top-40 left-20 w-60 sm:top-1/2
          md:left-auto md:right-10 lg:top-20 lg:w-80
        "
        >
            <ImgClipBox
                clipPath="absolute md:scale-125"
                src="img/swordman-partial.webp"
            />
            <ImgClipBox
                clipPath="sword-man-clip-path md:scale-125"
                src="img/swordman.webp"
            />
        </div>

        <div className="flex flex-col items-center text-center">
            <p className="font-general text-[10px] uppercase">
                Join Zentry
            </p>
            <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9]
            md:text-[6rem]
            ">
                Let´s b<b>u</b>ild the<br /> new era of <br /> g<b>a</b>ming 
                t<b>o</b>gether.
            </p>
            <Button
                title="Join the community"
                id="contact-button"
                containerClass="mt-10 rounded-full bg-blue-50 px-10 py-3 text-black"
                />
        </div>
      </div>
    </div>
  );
};
