"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkadrrq");
  if (state.succeeded) {
    return (
      <p className="text-center text-xl font-semibold">
        Vielen Dank für Ihr Vertrauen!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name-Feld */}
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium pl-4"
        >
          Ihr Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-2 block w-full px-4 py-2 text-lg border rounded-md shadow-sm focus:outline-none focus:ring-2"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm mt-2"
        />
      </div>

      {/* E-Mail-Feld */}
      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium pl-4"
        >
          E-Mail-Adresse
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Basic email format validation
          className="mt-2 block w-full px-4 py-2 text-lg border rounded-md shadow-sm focus:outline-none focus:ring-2"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-2"
        />
      </div>

      {/* Betreff-Feld */}
      <div>
        <label
          htmlFor="subject"
          className="block text-lg font-medium pl-4"
        >
          Betreff
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="mt-2 block w-full px-4 py-2 text-lg border rounded-md shadow-sm focus:outline-none focus:ring-2"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-500 text-sm mt-2"
        />
      </div>

      {/* Nachrichten-Feld */}
      <div>
        <label
          htmlFor="message"
          className="block text-lg font-medium pl-4"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="mt-2 block w-full px-4 py-2 text-lg border rounded-md shadow-sm focus:outline-none focus:ring-2"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-2"
        />
      </div>

      {/* Absende-Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-1/3 py-2 px-4 pb-4 text-white font-semibold rounded-md shadow-md"
      >
        {state.submitting ? "Senden..." : "Absenden"}
      </button>
    </form>
  );
}

export default ContactForm;
