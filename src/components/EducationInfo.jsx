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

function EducationInfo() {
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[30.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fc00a4] to-[#009bfc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col h-auto w-auto justify-center md:w-4/6 md:flex-row md:space-x-7">
          <Tilt
            className="flex justify-center h-auto w-2/5 bg-slate-100 mix-blend-multiply rounded-xl mb-3"
            options={defaultOptions}
            style={{ height: 300, width: 400 }}
          >
            <div className="flex flex-col text-center font-nav text-xl mt-3 pt-15 p-6">
              <div className="font-bold">Relevent Course Work</div>
              <div className="font-meduim">Data Structures</div>
              <div className="font-meduim">Discrete Structures</div>
              <div className="font-meduim">Computer Architecture</div>
              <div className="font-meduim">Logic for Computer Science</div>
              <div className="text-7xl">📚</div>
            </div>
          </Tilt>

          <Tilt
            className="h-auto w-2/5 bg-slate-100 mix-blend-multiply rounded-xl mb-3"
            options={defaultOptions}
            style={{ height: 300, width: 400 }}
          >
            <div className="flex flex-col text-center font-nav text-xl mt-3 pt-15 p-6">
              <div className="font-bold">Pursuing a BS in Computer Science</div>
              <div className="font-meduim">Graduating May 2025</div>
              <div className="text-7xl">🎓</div>
            </div>
          </Tilt>
          <Tilt
            className="h-auto w-2/5 bg-slate-100 mix-blend-multiply rounded-xl mb-3"
            options={defaultOptions}
            style={{ height: 300, width: 400 }}
          >
            <div className="flex flex-col content-center text-center font-nav text-xl mt-3 pt-15 p-6">
              <div className="font-bold">School Organizations</div>
              <div className="font-meduim">BreakThroughTECH</div>
              <div className="font-meduim">INIT formerly UPE</div>
              <div className="font-meduim">Google Student Club</div>
              <div className="text-7xl">😎</div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default EducationInfo;
