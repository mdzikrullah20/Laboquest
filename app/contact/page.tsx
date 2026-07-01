"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", form);

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-6 py-16">
      
      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Contact Us
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We’d love to hear from you. Fill out the form below and we’ll respond soon.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2">
        
        {/* CONTACT INFO */}
        <div className="space-y-6">
          <div className="rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              support@example.com
            </p>
          </div>

          <div className="rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              +91 98765 43210
            </p>
          </div>

          <div className="rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border bg-white p-6 shadow dark:border-zinc-800 dark:bg-black"
        >
          <div className="space-y-4">
            
            {/* NAME */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Your name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="you@example.com"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Write your message..."
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}