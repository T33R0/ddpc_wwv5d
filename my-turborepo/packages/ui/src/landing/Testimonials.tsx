'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: 'ddpc transformed how I track my vehicle maintenance. Never missing an oil change again!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    name: 'Mike Johnson',
    role: 'Car Enthusiast',
  },
  {
    text: 'The community features are amazing. I found parts for my project car from local sellers.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    name: 'Sarah Chen',
    role: 'Mechanic',
  },
  {
    text: 'Finally, a platform that understands vehicle enthusiasts. Clean interface, powerful features.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: 'Alex Rodriguez',
    role: 'DIY Builder',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block border border-slate-700 py-1 px-4 rounded-lg mb-6 text-sm text-slate-300">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See what our customers have to say about ddpc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1E1E1E] p-8 rounded-2xl border border-slate-800">
              <p className="text-slate-300 mb-6">{`"${testimonial.text}"`}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
