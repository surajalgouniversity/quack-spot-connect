
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: "📢",
      title: "Quack: Local Broadcasting",
      description: "Share what's happening around you! Broadcast local gossip, alerts, and events to your community. Keep everyone in the loop about what matters in your neighborhood."
    },
    {
      icon: "💬",
      title: "Qwak: Real-Time Conversations",
      description: "Start instant conversations with new people or catch up with friends. Join group discussions, build communities, and engage in meaningful real-time connections."
    },
    {
      icon: "🤖",
      title: "AI-Powered Connections",
      description: "Our smart AI provides personalized recommendations for people, events, and activities based on your interests and location. Discover exactly what you're looking for."
    },
    {
      icon: "📍",
      title: "Instant Local Socialization",
      description: "Connect with people nearby instantly. Discover local friends, explore community groups, and stay updated on events happening right around you."
    },
    {
      icon: "🌟",
      title: "Tailored Experience",
      description: "Every connection is personalized to your unique preferences and location. Find people who share your interests and discover communities that match your vibe."
    },
    {
      icon: "🚨",
      title: "Local Alerts & Events",
      description: "Stay informed about important alerts and exciting events in your area. Never miss out on what's happening in your community again."
    }
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to connect with your local community and build meaningful relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105">
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
