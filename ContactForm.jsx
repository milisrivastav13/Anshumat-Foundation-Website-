import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full mb-3 p-2 border rounded" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full mb-3 p-2 border rounded" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full mb-3 p-2 border rounded" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>
  );
}

