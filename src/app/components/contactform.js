"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send. Please check your connection.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300">You?</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
            placeholder="Your name or alias"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300">Email (optional)</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300">Write Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
            placeholder="Your message"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "Sending..."}
          className={`w-full py-2 rounded-md transition ${
            status === "Sending..."
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {status === "Sending..." ? "Sending..." : "Send"}
        </button>
      </form>
      {status && <p className="mt-4 text-white">{status}</p>}
    </div>
  );
}
