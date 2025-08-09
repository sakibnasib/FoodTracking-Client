import React from 'react';

const About = () => {
    return (
        <div className='w-12/12 mx-auto'>
          
            <section className="bg-green-50 py-10 px-4 md:px-20">
  <h1 className="text-4xl font-bold text-green-700 mb-4">About SafeBite</h1>
  <p className="text-gray-700 text-lg max-w-3xl">
    SafeBite is your smart food tracker that helps reduce food waste by reminding you before your food expires. With a user-friendly design, personalized dashboard, and real-time expiry alerts — we aim to build a mindful and sustainable food habit.
  </p>
</section>
{/*  */}
<section className="py-12 px-4 md:px-20 grid md:grid-cols-2 gap-10 bg-white">
  <div>
    <h2 className="text-2xl font-semibold text-green-600 mb-2">🎯 Our Mission</h2>
    <p className="text-gray-600">
      To empower individuals and families to reduce food waste through intelligent tracking, timely alerts, and responsible food usage.
    </p>
  </div>
  <div>
    <h2 className="text-2xl font-semibold text-green-600 mb-2">🌱 Our Vision</h2>
    <p className="text-gray-600">
      A world where food is respected, preserved, and consumed consciously — helping both our wallets and the planet.
    </p>
  </div>
</section>
{/*  */}
<section className="bg-green-100 py-12 px-4 md:px-20">
  <h2 className="text-3xl font-bold text-green-800 mb-6">Why Choose SafeBite?</h2>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>🚨 Expiry Alerts — Get notified before food goes bad.</li>
    <li>📊 Personalized Dashboard — View your fridge inventory at a glance.</li>
    <li>🔒 Secure System — We value your data privacy.</li>
    <li>📱 Mobile Responsive — Works beautifully on any device.</li>
    <li>♻️ Eco-friendly Approach — Join the zero-waste movement.</li>
  </ul>
</section>
{/*  */}
<section className="bg-white py-10 px-4 md:px-20 text-center">
  <h2 className="text-2xl font-bold text-green-600 mb-4">Have Suggestions or Feedback?</h2>
  <p className="text-gray-700 mb-6">
    We’d love to hear from you! Reach out via our contact form or drop us an email.
  </p>
  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
    Contact Us
  </button>
</section>

        </div>
    );
};

export default About;