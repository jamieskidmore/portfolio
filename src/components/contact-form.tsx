"use client";

import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Check if any of the fields are empty
    let allFieldsFilled = true;
    formData.forEach((value) => {
      if (!value) {
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      setShowMessage(true);
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailSent(true);
          setShowMessage(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="space-y-2 text-gray-800 max-w-6xl mx-auto"
    >
      <div>
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Name"
          className="p-2 border-2 border-gray-800 placeholder-gray-800 w-full bg-green-700 "
        />
      </div>
      <div>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="Email"
          className="p-2 border-2 border-gray-800 placeholder-gray-800 w-full bg-green-700 "
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="p-2 border-2 border-gray-800 placeholder-gray-800 w-full bg-green-700 "
        ></textarea>
      </div>
      {showMessage && (
        <div>
          <p className="text-gray-800">Please enter all fields.</p>
        </div>
      )}
      <div className="text-center">
        <input
          type="submit"
          value={emailSent ? "Sent ✔" : "Send"}
          className={`${
            emailSent
              ? "bg-green-500 button-disabled pointer-events-none"
              : "border-2  border-gray-800"
          } px-4 text-xl cursor-pointer hover:bg-gray-800 hover:text-green-700`}
        />
      </div>
    </form>
  );
}
