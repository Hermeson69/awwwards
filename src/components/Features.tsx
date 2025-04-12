import { TiLocationArrow } from "react-icons/ti";

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  dicripition: string;
}

const BentoCard = (props: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={props.src}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div
        className="relative z-10 flex size-full flex-col
            justify-between p-5 text-blue-50"
      >
        <div>
          <h1 className="bento-title spacial-font">{props.title}</h1>
          {props.dicripition && (
            <p className="mt-3 max-w-64 text-xs md:text-base">
              {props.dicripition}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into interconnected overlay
            experiences on your world.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            dicripition="A cross-platform metagame app,
                    in a rewarding adventure."
          />
        </div>

        <div className="grid h-[135vh] gap-7 grid-rows-3 grid-cols-2">
          <div className="bento-tilt_1 row-span-2 md:col-span-1">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
            <>
              zig<b>m</b>a
            </>
              }
              dicripition="An gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>
          {}
          <div className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
            <>
              n<b>e</b>xus
            </>
              }
              dicripition="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </div>

          <div className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
            <>
              az<b>u</b>l
            </>
              }
              dicripition="A cross-word AI Agent - elevating your gameplay to be more fun and productive."
            />
          </div>

          <div className="bento-tilt_2 row-span-1 md:col-span-1">
            <div className="flex size-full flex-col justify-between bg-violet-700 p-5">
              <h1 className="bento-title font-special max-w-64 text-black">
            M<b>o</b>re Co<b>m</b>ing So<b>o</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2 row-span-1 md:col-span-1">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
