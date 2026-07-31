"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent){e.preventDefault();setSent(true);}
  return <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-gray-900 md:p-10"><input required placeholder="Enter Your Full Name"/><input required type="email" placeholder="Enter Your Email Address"/><textarea required rows={8} placeholder="Type Your Message..."/><button className="btn-primary mt-2 min-w-48" type="submit">{sent ? "Message Sent ✓" : "Send Message"}</button></form>
}
