import init from '../assets/init.svg'
import crest from '../assets/FiuCrest.svg'
import fiuLogo from '../assets/FiuLogo.svg'

function Education() {
  return (
    <div className="flex justify-center">
      <div className="h-auto w-3/6 bg-gray-400 rounded-xl">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center">
            <div className="font-nav font-medium text-2xl mt-10">Currently attending</div>
            <div className="font-nav font-bold text-3xl">Florida International University</div>
            <div className="font-nav font-normal text-lg">Junior standing pursuing a Bachelor of Science</div>
            <div className="font-nav font-normal text-lg">in Computer Science.</div>
          </div>
          <div className="flex flex-row justify-center">
            <img src={init} alt="init" />
            <img src={crest} alt="FIU Crest" />
            <img src={fiuLogo} alt="FIU Knight Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
