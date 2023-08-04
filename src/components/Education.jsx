import init from "../assets/init.svg";
import crest from "../assets/FiuCrest.svg";
import fiuLogo from "../assets/FiuLogo.svg";

function Education() {
  return (
    <div id="about-section" className="flex justify-center mt-20">
      <div className="h-auto w-5/6 md:w-4/6 bg-slate-100 rounded-xl">
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex flex-col justify-center text-center">
            <div className="font-nav font-medium text-2xl mt-10 md:text-4xl">
              Currently attending
            </div>
            <div className="font-nav font-bold text-2xl mt-3 md:text-5xl">
              Florida International University
            </div>
            <div className="font-nav font-normal text-base mt-3 md:text-2xl">
              Junior standing pursuing a Bachelor of Science
            </div>
            <div className="font-nav font-normal text-base md:text-2xl">
              in Computer Science.
            </div>
          </div>
          <div className="flex flex-row w-auto justify-center pb-8 space-x-2">
            <img className="h-28 w-28 p-1 md:h-52 md:w-52" src={init} alt="init" />
            <img className="h-28 w-28 p-1 md:h-52 md:w-52" src={crest} alt="FIU Crest" />
            <img className="h-28 w-28 p-1 md:h-52 md:w-52" src={fiuLogo} alt="FIU Knight Logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
