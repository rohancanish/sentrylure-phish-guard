
import { Brain, Zap, Globe, Users, Lock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      title: "Advanced AI Detection",
      description: "Powered by machine learning models trained on real-world phishing datasets for accurate threat identification."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Real-time Analysis",
      description: "Instant threat detection with millisecond response times for immediate security feedback."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-400" />,
      title: "Multi-format Support",
      description: "Analyze emails, URLs, messages, and various content types across different platforms."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "User-friendly Interface",
      description: "Intuitive design that makes cybersecurity accessible to users of all technical levels."
    },
    {
      icon: <Lock className="h-8 w-8 text-red-400" />,
      title: "Privacy-first Approach",
      description: "Your data stays secure with local processing and no sensitive information storage."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-cyan-400" />,
      title: "Continuous Learning",
      description: "Our models evolve with emerging threats to maintain high detection accuracy."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            SentryLure combines cutting-edge AI technology with user-friendly design to deliver comprehensive phishing protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Digital Life?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of users who trust SentryLure to keep them safe from phishing attacks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.2%</div>
                <div className="text-sm text-gray-400">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-sm text-gray-400">Threats Detected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">0.1s</div>
                <div className="text-sm text-gray-400">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
