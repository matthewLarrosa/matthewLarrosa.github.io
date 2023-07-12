import teamPhoto from "../assets/Team Pic 2 Cropped.jpg";

function Internship() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="h-auto w-5/6 md:w-4/6 bg-slate-100 rounded-xl">
          <div className="flex flex-col-reverse justify-center min-[1270px]:flex-row">
            <div className="bg-slate-100 justify-center align-center rounded-xl h-auto w-auto">
              <div className="font-nav font-bold text-3xl text-left mt-6 ml-12">
                May 2023 Internship
              </div>
              <div className="font-nav font-semibold text-2xl text-left ml-12 text-sky-500">
                American Express
              </div>
              {/* class="min-[1270px]:text-center max-[600px]:bg-sky-300" */}
              <p className="font-nav font-meduim text-normal text-justify mt-2 px-12 pb-5">
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
            <div className="flex justify-center align-center">
              <img
                className="overflow-hidden h-auto w-auto rounded-t-xl min-[1270px]:rounded-b-lg min-[1270px]:max-w-lg min-[1270px]:p-5 min-[1270px]:pl-0"
                src={teamPhoto}
                alt="group photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[34.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fc00a4] to-[#009bfc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Internship;
