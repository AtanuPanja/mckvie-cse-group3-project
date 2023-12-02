import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { ColorRing } from "react-loader-spinner";

function ContactComponent() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(true);

    emailjs
      .send(
        "service_9wfr8fh",
        "template_2a4u4lv",
        {
          from_name: form.name,
          to_name: "Project_team-3",
          from_contact: form.number,
          from_email: form.email,
          to_email: "noobragang311@gmail.com",
          message: form.message,
        },
        "pbFRe0ViZftzD7JjN"
      )
      .then(() => {
        swal({
          title: "Message send Successfully",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setLoading(false);
        setForm({ name: "", email: "", number: "", message: "" });
      })
      .catch((error) => {
        swal({
          title: "Error",
          icon: "Error",
          buttons: false,
          timer: 3000,
        });
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-between min-h-screen total ">
      <div className="p-1 left-side mt-4 rounded-lg">
        <h1 className="head-text text-gray-300 text_gradient">Contact info</h1>
        <p className="text-gray-300 mt-3 p-2 pr-5">
          Empowering Seamless Transactions: Transforming Supply Chains with
          Blockchain Innovation.Reach out to us for efficient, transparent, and
          secure supply chain solutions that redefine industry standards.
        </p>
        <div className="m-5 flex justify-center flex-col gap-10">
          <div className="flex items-center justify-start text-slate-200 gap-3">
            <a className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
            </a>
            <p>mckviecse2024@gmail.com</p>
          </div>
          <div className="flex items-center justify-start text-slate-200 gap-3">
            <a className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
              </svg>
            </a>
            <p>+91-9876543210</p>
          </div>
          <div className="flex items-center justify-start text-slate-200 gap-3">
            <a className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
              </svg>
            </a>
            <p>Triumph Terrace, Inspira City</p>
          </div>
        </div>
        {/* social Links */}
        <div className="f">
          <div className="flex flex-wrap py-3 justify-start ml-4">
            <a className="text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="right-side text-left">
        {loading ? (
          <div className="relative flex lg:flex-row flex-col max_container2 justify-center items-center ">
            <ColorRing
              visible={true}
              height="100"
              width="100"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <section className="relative flex lg:flex-row flex-col align-center max_container2 ">
            <div className="flex-1 min-w-[50%] flex flex-col">
              <h1 className="head-text text_gradient">Get in Touch</h1>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-2 mt-4"
              >
                <label className="text-white font-semibold">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Enter Name"
                    style={{ color: "white" }}
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label className="text-white font-semibold">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="mckvcse2024@gmail.com"
                    style={{ color: "white" }}
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>

                <label className="text-white font-semibold">
                  Contact No
                  <input
                    type="tel"
                    name="number"
                    className="input"
                    placeholder="1234567890"
                    style={{ color: "white" }}
                    required
                    value={form.number}
                    onChange={handleChange}
                  />
                </label>

                <label className="text-white font-semibold">
                  Your Message
                  <textarea
                    name="message"
                    rows="4"
                    className="textarea"
                    placeholder="Write your thoughts here..."
                    style={{ color: "white" }}
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" className="btn">
                  submit
                </button>
              </form>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ContactComponent;
