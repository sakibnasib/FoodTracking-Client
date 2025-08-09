import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className=" py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-violet-700 mb-3">Contact Us</h2>
        <p className="text-gray-600 mb-10 text-lg">
          We’d love to hear from you. Please fill out the form below and we’ll get back to you soon.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side contact illustration */}
          <img
            src="https://i.ibb.co/S4K3jHBc/4387144.jpg"
            alt="Contact"
            className="w-full max-w-sm mx-auto animate-fadeIn rounded-2xl"
          />

          {/* Right side contact form */}
          <div className="card bg-white shadow-xl p-6">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Your Message"
                rows="4"
              ></textarea>
              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;