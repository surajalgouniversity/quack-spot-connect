
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Quackspot?",
      answer: "Quackspot is a social networking app that connects you with people in your local community. It's designed for authentic local connections, community building, and staying updated on neighborhood happenings – not for dating."
    },
    {
      question: "How does Quackspot use AI?",
      answer: "Our AI engine provides personalized recommendations for people to connect with, local events to attend, and activities that match your interests. It learns from your preferences to make your social discovery experience more relevant and engaging."
    },
    {
      question: "What is the \"Quack\" feature?",
      answer: "Quack is our local broadcasting feature that allows you to share messages, news, alerts, and updates with your immediate community. Think of it as your neighborhood bulletin board, but digital and instant."
    },
    {
      question: "What is \"Qwak\"?",
      answer: "Qwak is our real-time conversation and community building feature. It allows you to chat instantly with new people, join group discussions, and build lasting communities based on shared interests and location."
    }
  ];

  return (
    <div id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Quackspot
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
