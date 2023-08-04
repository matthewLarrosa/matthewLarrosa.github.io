import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z559epq",
        "template_fnbmug8",
        form.current,
        "bZBnqpFaZzO8JO-BF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact-section" className="flex justify-center flex-col mb-16">
      <div className="flex justify-center h-auto">
        <div className="font-nav font-bold text-3xl m-6">Contact Me</div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex justify-center flex-col h-auto w-5/6 md:w-4/6 bg-slate-100 rounded-xl">
          <div className="flex justify-center text-center flex-col">
            <div className="font-sec font-bold text-xl m-5">
              Feel free to send me an email or message me on my socials
            </div>
            <div className="flex justify-center flex-row">
              <a href="https://github.com/matthewLarrosa">
                <BsGithub className="text-4xl m-3" />
              </a>
              <a href="https://www.linkedin.com/in/matthew-larrosa-19-9999ml/"><BsLinkedin className="text-4xl m-3" /></a>
            </div>
          </div>
          <div className="flex justify-center">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto w-full">
                <div className="col-8 form-group mb-2 text-xl">
                  <input
                    type="text"
                    className="form-control rounded-md w-72 font-sec border-slate-800 border-black border-2"
                    placeholder=" Name"
                    name="name"
                  />
                </div>
                <div className="col-8 form-group mb-2 text-xl">
                  <input
                    type="email"
                    className="form-control rounded-md w-72 font-sec border-slate-800 border-black border-2"
                    placeholder=" Email Address"
                    name="email"
                  />
                </div>
                <div className="col-8 form-group mb-2 text-xl">
                  <input
                    type="text"
                    className="form-control rounded-md w-72 font-sec border-slate-800 border-black border-2"
                    placeholder=" Subject"
                    name="subject"
                  />
                </div>
                <div className="col-8 form-group mb-2 text-xl">
                  <textarea
                    className="form-control rounded-md w-96 font-sec border-slate-800 border-black border-2"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder=" Your message"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-8 form-group mb-6 text-xl">
                  <input
                    type="submit"
                    className="btn btn-info rounded-md font-sec border-slate-800 border-black border-2 hover:text-white hover:bg-black hover:cursor-pointer"
                    value=" Send Message "
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // Test
  );
}
export default Contact;
