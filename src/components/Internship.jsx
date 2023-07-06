import teamPhoto from "../assets/Team Pic 2 Cropped.jpg";

function Internship() {
  return (
    <div className="flex justify-center mt-20">
      <div className="h-auto w-4/6 bg-slate-100 rounded-xl">
        <div className="flex flex-row justify-center">
          <div className="bg-slate-100 rounded-xl w-1/2">
            <div className="font-nav font-bold text-3xl">May 2023 Internship</div>
            <div className="font-nav font-semibold text-2xl text-sky-500">American Express</div>
            <p className="font-nav font-meduim text-lg">
              Month long internship at American Express, tasked with developing {'\n'} a React Module project tracker for Amex scrum teams. Leveraging{"\n"}
              React JS, Node and Docker, I designed a well-structured table{"\n"}
              equipped with convenient features like adding and editing project{"\n"}
              details, as well as time stamps to track changes. Enhanced the{"\n"}
              user experience with seamless access to update and monitor project{"\n"}
              information, including real-time project status and updates.
            </p>
          </div>
          <div><img className="h-auto w-auto rounded-r-xl" src={teamPhoto} alt="group photo" /></div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
