import React from 'react';

const testimonials = [
  {
    quote: "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
    name: "Bessie Cooper",
    title: "Co-Founder, CEO",
    company: "Alterbone",
    image: 'https://unsplash.it/640/425?businessman' // Update with the actual image path
  },
  {
    quote: "I didn’t know designing in Figma could be this individualized. I’d never considered it before, but Landingfolio changed my mind.",
    name: "Albert Flores",
    title: "Senior Product Manager",
    company: "Ridoria",
    image: 'https://unsplash.it/640/425?men' // Update with the actual image path
  },
  {
    quote: "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
    name: "Jenny Wilson",
    title: "Head of Marketing",
    company: "Incanto",
    image: 'https://unsplash.it/640/425?student' // Update with the actual image path
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Don't just take our word for it.<span className='text-green-500'> Over 1000+ people</span>  trust us.</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg max-w-xs transform transition-transform hover:translate-x-2 hover:translate-y-2 duration-300"
            >
              <p className="text-lg italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
