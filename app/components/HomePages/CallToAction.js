"use client";
import React, { useState } from "react";

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white py-16 px-6 md:px-20" id="register">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Right: Call to Action */}
          <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="text-teal-500">Empower Women</span> Through
            Digital Skills?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-slate-600">
            Let's work together to equip women and girls in Africa with the
            tools they need to succeed in the digital economy.
          </p>
          {/* <a
            href="#contact"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Get Involved
          </a> */}
        </div>
        {/* Left: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Expression of Interest
              </h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  fetch("/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(new FormData(form)).toString(),
                  })
                    .then(() => setSubmitted(true))
                    .catch((error) => alert("Submission error: " + error));
                }}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <label>
                  Don't fill this out if you're human:
                  {/* Hidden input for Netlify bot-field */}
                  <input name="bot-field" type="hidden" />
                </label>

                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="flex-1 mt-4 md:mt-0">
                    <label
                      htmlFor="secondName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Second Name
                    </label>
                    <input
                      type="text"
                      name="secondName"
                      id="secondName"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Second name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center text-teal-800 bg-teal-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Thank you!</h3>
              <p>We've received your message and will get back to you soon.</p>
            </div>
          )}
        </div>

      
      </div>
    </div>
  );
}