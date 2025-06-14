
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div id="download" className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Join Your Local Community
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to discover what's happening around you? Join the waitlist and be among the first to experience Quackspot when we launch.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 text-lg font-medium">
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50">
            Learn More
          </Button>
        </div>
        
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
            <span className="text-3xl">📷</span>
            <div className="text-sm mt-2">Instagram</div>
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
            <span className="text-3xl">👥</span>
            <div className="text-sm mt-2">Community</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
