
import { Shield, Github, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="about" className="bg-slate-900/80 backdrop-blur-sm border-t border-blue-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 animate-pulse bg-blue-400/20 rounded-full blur-md"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SentryLure</h3>
                <p className="text-xs text-blue-300">AI Phishing Detection</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced AI-powered phishing detection system designed to protect users from fraudulent emails, 
              websites, and messages. Stay safe in the digital world with intelligent threat analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Detection</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Real-time Analysis</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">URL Scanning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Email Protection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SentryLure. Built by Rohan C Anish. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
