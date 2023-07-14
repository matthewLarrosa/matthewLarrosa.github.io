// import React, { useRef } from "react";
// import emailjs from "emailjs-com";]

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail','template_fnbmug8', e.target, 'bZBnqpFaZzO8JO-BF')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  }

//   YOUR_TEMPLATE_ID="template_fnbmug8"
// YOUR_PUBLIC_KEY="bZBnqpFaZzO8JO-BF"
  
  return (
    <div className="flex justify-center flex-col mb-6">
      <div className="flex justify-center h-auto">
        <div className="font-nav font-bold text-3xl m-6">Contact Me</div>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
