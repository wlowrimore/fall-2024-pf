"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ButtonLoader from "../ui/ButtonLoader";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const formData = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (form.current === null) {
      return;
    }

    const firstName = formValues.fullName.split(" ")[0];

    emailjs
      .sendForm("service_fwm5wyc", "template_lg6t5vq", form.current, {
        publicKey: "xUQdgDRwBEzAA4COR",
      })
      .then(
        () => {
          setLoading(false);
          setSuccessMsg(`Thank you, ${firstName}! Your message has been sent.`);
          setFormValues({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          setErrorMsg("An error occurred. Please try again later.");
          console.log(error);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMsg("");
      setErrorMsg("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [successMsg, errorMsg]);

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="full-name" className="font-bold text-neutral-600">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleChange}
          required
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold text-neutral-600">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject" className="font-bold text-neutral-600">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          required
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-bold text-neutral-600">
          Message
        </label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-neutral-400 outline-none p-2 rounded-lg bg-[#f5f5f5] text-neutral-900"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:space-x-28">
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-[16rem] mb-3 py-4 px-8 uppercase bg-[#A92E2E] text-white text-xl font-bold rounded-lg outline-none hover:brightness-110 transition duration-200"
        >
          <span>{loading ? <ButtonLoader /> : "send message"}</span>
        </button>
        {successMsg && (
          <span className="text-neutral-800 bg-gradient-to-r py-1 md:py-2 px-2 md:px-4 rounded-lg md:rounded-full from-green-200 via-green-100 to-green-50 text-xs md:text-xl">
            {successMsg}
          </span>
        )}
        {errorMsg && (
          <span className="text-neutral-800 bg-gradient-to-r py-1 md:py-2 px-2 md:px-4 rounded-lg md:rounded-full from-red-200 via-red-100 to-red-50 text-xs md:text-xl">
            {errorMsg}
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
