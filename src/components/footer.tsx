import Link from "next/link";
import ContactForm from "./contact-form";

export default function Footer() {
  return (
    <div>
      <div className="my-4 pl-5 text-3xl text-green-700">
        <p>Get in touch!</p>
      </div>
      <div className="bg-green-700 p-5">
        <ContactForm />
      </div>
    </div>
  );
}
