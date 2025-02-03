"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validation simple
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_80rbwdm",
        "template_6kimdda",
        form.current,
        "Ho-IrRor0TJcC6MxZ"
      );

      // Réinitialise le formulaire après l'envoi
      form.current.reset();
      setSuccess(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send email. Please try again later.");
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 color-black text-gray-600">
          Vous souhaitez me contacter ?
        </h2>
        <div
          className="w-40 h-1 mx-auto mb-20 rounded-full transition-colors duration-300"
          style={{ backgroundColor: isHovered ? "#0077b5" : "#6b7280" }}
        ></div>
        {error && (
          <div className="mb-6 max-w-md mx-auto p-4 border-2 border-red-500 bg-red-100 bg-opacity-50 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        {success && (
          <div className="mb-6 max-w-md mx-auto p-4 border-2 border-green-500 bg-green-100 bg-opacity-50 rounded-lg">
            <p className="text-green-700">
              Votre message a été envoyé avec succès !
            </p>
          </div>
        )}
        <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div className="mb-4">
            <input
              type="text"
              name="from_name"
              placeholder="Nom"
              className="w-full px-4 py-3 rounded-lg borderborder-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg borderborder-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              className="w-full px-4 py-3 rounded-lg borderborder-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg borderborder-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-darktext-white font-semibold py-3 rounded-lg transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
