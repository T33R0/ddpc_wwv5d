'use client';

import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    id: 'driver',
    name: 'Driver',
    subtitle: 'Logbook',
    price: '$0',
    period: 'Free',
    description: 'The foundation for every build. This tier serves as the ultimate digital logbook, meticulously documenting every detail a future owner will want to know.',
    features: [
      'Unlimited vehicle slots',
      'Basic maintenance logs for services and parts',
      'Photo gallery for key modifications and work',
      'Detailed data export for sale sheets or show placards',
      'Community forum access',
    ],
    popular: false,
    cta: 'Get Started Free',
  },
  {
    id: 'builder',
    name: 'Builder',
    subtitle: 'Workshop',
    price: '$12.99',
    period: 'month',
    description: 'This is where your vision becomes a tactical plan. The Builder tier provides the structure to turn a parts list into a cohesive project.',
    features: [
      'Everything in Driver plus:',
      'Advanced project management for builds',
      'Integrated mod build lists and wishlists',
      'Vendor and parts tracking',
      'Cost analysis per vehicle',
      'Private group collaboration',
    ],
    popular: true,
    cta: 'Start Building',
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Command Center',
    price: '$24.99',
    period: 'month',
    description: 'For those who treat their project with operational precision. This tier is your command center, leveraging advanced analytics and AI to optimize every decision.',
    features: [
      'Everything in Builder plus:',
      'Advanced analytics dashboard',
      'Shop AI assistant for maintenance and logistics',
      'Comprehensive budget tracking',
      'Full team collaboration access',
      'Priority support and API access',
    ],
    popular: false,
    cta: 'Go Pro',
  },
];

export function PricingPage() {
  return (
    <section className="py-20 pt-32 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Start free and scale as your garage grows. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#1E1E1E] rounded-3xl p-8 border-2 transition-all duration-300 ${plan.popular ? 'border-red-500 shadow-lg shadow-red-500/20 scale-105' : 'border-slate-800 hover:border-red-500/50'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
                <div className="text-sm font-medium text-slate-400 mb-2">{plan.subtitle}</div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">/ {plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.popular ? 'bg-red-500 text-white hover:bg-red-500/90 shadow-lg' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
