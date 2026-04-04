import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <SplashCursor  />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#F1FFB2'
          hoverFillColor='#C6F10E'
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div 
                  className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
                    <RotatingText 
                        texts={['Web Design', 'Web Depelopment', 'Web Programing', 'Ai Development']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText 
                    text="I'm Salman Rexsa"
                    className="text-6xl font-semibold text-start text-[#ffffff]"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText 
                    text="Full Stack Developer"
                    className="text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText 
                  text="I am from Indonesia, I have more than 5 years of work experience, I am currently working in a company as a full stack product designer, analyzing the system to be created, Managing and leading the team to designing the user interface besides that I am also a freelance frontend developer. come work with me."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8 text-white"
                />
                <div className="flex items-center">
                  <GradientText
                    colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-6 rounded-lg border"
                  >
                    Consultation Now
                  </GradientText>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="CREATIVE*ACADEMY*ID*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-60 right-28"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto min-h-screen">
        <ScrollVelocity 
        texts={['Creative Academy', 'Ngajarin Kalian Dari Cupu Sampe Suhu']} 
         />
      </div>
    </div>
  );
}
