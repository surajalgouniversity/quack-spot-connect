
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🦆</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Quackspot
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">FAQ</a>
              <a href="#download" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Download</a>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <a href="#features" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
                <a href="#faq" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">FAQ</a>
                <a href="#download" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">Download</a>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8 animate-fade-in">
              <span className="mr-2">🚀</span>
              Launching July 21st, 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Discover Your
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Local Community
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Connect with your neighborhood, discover local events, and build meaningful relationships. 
              Not a dating app – it's your gateway to authentic local connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 text-lg font-medium">
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-purple-300 rounded-full opacity-30 animate-pulse delay-500"></div>
    </div>
  );
};

export default Hero;
