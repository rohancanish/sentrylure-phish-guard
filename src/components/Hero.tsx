
import { Shield, Zap, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 relative">
              <Shield className="h-10 w-10 text-white" />
              <div className="absolute inset-0 animate-pulse bg-blue-400/30 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Phishing Shield
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            SentryLure uses advanced AI to detect phishing attempts in emails, messages, and URLs. 
            Stay protected with real-time threat detection and intelligent security analysis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              Start Detection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
              <Zap className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Detection</h3>
              <p className="text-gray-400 text-sm">Instant analysis of suspicious content with millisecond response times</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
              <Eye className="h-8 w-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-400 text-sm">Advanced machine learning models trained on real-world phishing data</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
              <Shield className="h-8 w-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Multi-Format Support</h3>
              <p className="text-gray-400 text-sm">Analyze emails, URLs, messages, and various content types</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
