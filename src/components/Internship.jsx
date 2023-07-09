import teamPhoto from "../assets/Team Pic 2 Cropped.jpg";

function Internship() {
  return (
    <div className="flex justify-center mt-10">
      <div className="h-auto w-5/6 md:w-4/6 bg-slate-100 rounded-xl">
        <div className="flex flex-col-reverse justify-center lg:flex-row">
          <div className="bg-slate-100 rounded-xl h-auto w-auto md:w-1/2 md:h-1/2">
            <div className="font-nav font-bold text-3xl text-left mt-2 ml-12">
              May 2023 Internship
            </div>
            <div className="font-nav font-semibold text-2xl text-left ml-12 text-sky-500">
              American Express
            </div>
            
              <p className="font-nav font-meduim text-lg text-justify md:text-left mt-2 px-12">
                Month long internship at American Express, tasked with
                developing a React Module project tracker for Amex scrum teams.
                Leveraging React JS, Node and Docker, I designed a
                well-structured table equipped with convenient features like
                adding and editing project details, as well as time stamps to
                track changes. Enhanced the user experience with seamless access
                to update and monitor project information, including real-time
                project status and updates.
              </p>
          </div>
          <div>
            <img
              className="h-auto w-auto rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
              src={teamPhoto}
              alt="group photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
