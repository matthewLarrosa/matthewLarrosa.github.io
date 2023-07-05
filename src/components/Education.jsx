import init from "../assets/init.svg";
import crest from "../assets/FiuCrest.svg";
import fiuLogo from "../assets/FiuLogo.svg";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Education() {
  return (
    <div className="flex justify-center mt-20">
      <div className="h-auto w-4/6 bg-gray-400 rounded-xl">
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex flex-col justify-center text-center">
            <div className="font-nav font-medium text-4xl mt-10">
              Currently attending
            </div>
            <div className="font-nav font-bold text-5xl mt-3">
              Florida International University
            </div>
            <div className="font-nav font-normal text-xl mt-3">
              Junior standing pursuing a Bachelor of Science
            </div>
            <div className="font-nav font-normal text-xl">
              in Computer Science.
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-20">
            <img className="h-60 w-60 p-1" src={init} alt="init" />
            <img className="h-60 w-60 p-1" src={crest} alt="FIU Crest" />
            <img
              className="h-60 w-60 p-1"
              src={fiuLogo}
              alt="FIU Knight Logo"
            />
          </div>
        </div>
      </div>
      <div>
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
          <div>Hello this is a test</div>
        </Tilt>
      </div>
    </div>
  );
}

export default Education;
