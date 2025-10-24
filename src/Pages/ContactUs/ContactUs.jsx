// import React from 'react';

// const ContactUs = () => {
//   return (
//     <section id="contact" className=" py-20 px-4 md:px-10">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-violet-700 mb-3">Contact Us</h2>
//         <p className="text-gray-600 mb-10 text-lg">
//           We’d love to hear from you. Please fill out the form below and we’ll get back to you soon.
//         </p>

//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* Left side contact illustration */}
//           <img
//             src="https://i.ibb.co/S4K3jHBc/4387144.jpg"
//             alt="Contact"
//             className="w-full max-w-sm mx-auto animate-fadeIn rounded-2xl"
//           />

//           {/* Right side contact form */}
//           <div className="card bg-white shadow-xl p-6">
//             <form className="space-y-4">
//               <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
//               <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
//               <textarea
//                 className="textarea textarea-bordered w-full"
//                 placeholder="Your Message"
//                 rows="4"
//               ></textarea>
//               <button className="btn btn-primary w-full">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Updated heading with a fresh color */}
        <h2 className="text-5xl font-extrabold text-green-600 mb-4 tracking-tight animate-fade-in-down">
          Get in Touch!
        </h2>
        {/* Subtitle with improved spacing and color */}
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          We’d love to hear your feedback, questions, or ideas. We're here to help you on your health journey.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Enhanced illustration for a food tracking app */}
          <div className="relative p-6 bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
            <img
              src="https://i.ibb.co.com/PG5kkmWy/6805.jpg"
              alt="Healthy food contact illustration"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-green-500 opacity-20 rounded-3xl"></div>
          </div>

          {/* Upgraded contact form with better styling */}
          <div className="card bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 animate-slide-in-right">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input w-full p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input w-full p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                aria-label="Your Email"
              />
              <textarea
                className="textarea w-full p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                placeholder="Your Message"
                rows="6"
                aria-label="Your Message"
              ></textarea>
              <button
                type="submit"
                className="btn w-full py-4 text-white font-bold bg-green-600 hover:bg-green-700 rounded-xl transition-colors duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;