import init from "../assets/init.svg";
import crest from "../assets/FiuCrest.svg";
import fiuLogo from "../assets/FiuLogo.svg";

function Education() {
  return (
    <div className="flex justify-center mt-20">
      <div className="h-auto w-4/6 bg-slate-100 rounded-xl">
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex flex-col justify-center text-center">
            <div className="font-nav font-medium md:text-4xl mt-10 sm:text-2xl">
              Currently attending
            </div>
            <div className="font-nav font-bold md:text-5xl mt-3 sm:text-5xl">
              Florida International University
            </div>
            <div className="font-nav font-normal md:text-xl mt-3 sm:text-lg">
              Junior standing pursuing a Bachelor of Science
            </div>
            <div className="font-nav font-normal md:text-xl sm:text-lg">
              in Computer Science.
            </div>
          </div>
          <div className="flex flex-row w-auto justify-center pb-8 space-x-20">
            <img className="h-40 w-40 sm:h-60 sm:w-60 p-1 sm:block hidden" src={init} alt="init" />
            <img className="h-40 w-40 sm:h-60 sm:w-60 p-1" src={crest} alt="FIU Crest" />
            <img
              className="h-40 w-40 p-1 sm:h-60 sm:w-60 sm:block hidden"
              src={fiuLogo}
              alt="FIU Knight Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
