
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="absolute inset-0 animate-pulse bg-blue-400/20 rounded-full blur-md"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SentryLure</h1>
              <p className="text-xs text-blue-300">AI Phishing Detection</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#detection" className="text-gray-300 hover:text-blue-400 transition-colors">
              Detection
            </a>
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-500/20 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#detection" className="text-gray-300 hover:text-blue-400 transition-colors">
                Detection
              </a>
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                About
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-fit">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
