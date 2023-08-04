import projectManager from "../assets/ReleaseManagementRecreation.png";

function Projects() {
  return (
    <div id="projects-section" className="flex justify-center flex-col mb-6">
      <div className="flex justify-center h-auto">
        <div className="font-nav font-bold text-3xl m-6">Projects</div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex justify-center h-auto w-5/6 md:w-4/6 bg-slate-100 rounded-xl">
          <div className="flex flex-col-reverse justify-center min-[1270px]:flex-row">
    
            <div className="flex justify-center align-center ">
              <img
                className="overflow-hidden h-auto w-auto rounded-b-xl min-[1270px]:rounded-b-lg min-[1270px]:max-w-lg min-[1270px]:p-5"
                src={projectManager}
                alt="group photo"
              />
            </div>
            <div className="bg-slate-100 justify-center align-center rounded-xl h-auto w-auto">
              <div className="font-nav font-bold text-3xl text-left mt-6 ml-12">
                Release Management 2023
              </div>
              <div className="font-nav font-semibold text-2xl text-left ml-12 text-sky-500">
                American Express
              </div>
              <p className="font-nav font-meduim text-normal text-justify mt-2 px-12 pb-5">
                
              Release Management 2023 is a React Module built using
              technologies such as React JS, Docker, AMEX DLS CSS library, and Node.
              It provides a seamless platform for users to efficiently monitor and
              manage projects scheduled throughout a given year. With its intuitive
              interface and robust functionalities, the Scrum Project Manager streamlines
              project management, enabling teams to stay organized and focused.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
