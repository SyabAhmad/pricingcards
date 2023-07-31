import React from "react";

const Form = () => {
  return (
    <>
      <form action="post" className="flex justify-evenly mt-40 ">
        <div className="flex flex-col gap-3 text-center">
          <h2>Contact us</h2>
          <div className="flex flex-col border border-blue-600 rounded-2xl p-5 text-left gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="border border-blue-500 rounded-xl p-2"
              placeholder="John Dov"
              type="text"
              required
              id="name"
            />
            <label htmlFor="mail">Email</label>
            <input
              className="border border-blue-500 rounded-xl p-2"
              placeholder="someone@example.com"
              type="mail"
              required
              id="mail"
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-blue-600 rounded-xl p-2"
              placeholder="message here...."
              id="message"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button className="text-white bg-blue-600 border border-white rounded-xl mb-2 p-2">
              Submit
            </button>
            <span>Thank You</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
