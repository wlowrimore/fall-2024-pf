"use client";

import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="full-name" className="font-bold text-neutral-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold text-neutral-600">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject" className="font-bold text-neutral-600">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-bold text-neutral-600">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <button
        type="submit"
        className="w-fit py-4 px-8 uppercase bg-[#A92E2E] text-white text-xl font-bold rounded-lg outline-none hover:brightness-110 transition duration-200"
      >
        send message
      </button>
    </form>
  );
};

export default ContactForm;
