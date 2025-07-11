
import { useState } from 'react';
import { AlertTriangle, CheckCircle, Shield, Scan, Link, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ThreatLevel = 'safe' | 'suspicious' | 'dangerous';

interface DetectionResult {
  threat_level: ThreatLevel;
  confidence: number;
  analysis: string;
  indicators: string[];
}

export const DetectionInterface = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [textInput, setTextInput] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const analyzeContent = async (content: string, type: 'text' | 'url') => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI detection logic
    const phishingKeywords = ['urgent', 'verify', 'suspended', 'click here', 'limited time', 'act now', 'secure-login', 'account-update'];
    const suspiciousPatterns = content.toLowerCase();
    
    let threat_level: ThreatLevel = 'safe';
    let confidence = 0;
    let indicators: string[] = [];
    
    const foundKeywords = phishingKeywords.filter(keyword => suspiciousPatterns.includes(keyword));
    
    if (foundKeywords.length > 0) {
      indicators.push(...foundKeywords.map(kw => `Suspicious keyword: "${kw}"`));
    }
    
    if (type === 'url') {
      if (content.includes('secure-') || content.includes('login-update') || content.includes('.tk') || content.includes('.ml')) {
        indicators.push('Suspicious domain pattern detected');
      }
      if (!content.startsWith('https://')) {
        indicators.push('Non-secure HTTP connection');
      }
    }
    
    if (indicators.length >= 3) {
      threat_level = 'dangerous';
      confidence = Math.min(95, 70 + indicators.length * 5);
    } else if (indicators.length >= 1) {
      threat_level = 'suspicious';
      confidence = Math.min(85, 50 + indicators.length * 10);
    } else {
      threat_level = 'safe';
      confidence = Math.max(80, 90 - Math.random() * 10);
    }
    
    const analysis = threat_level === 'dangerous' 
      ? 'High probability phishing attempt detected. This content exhibits multiple suspicious characteristics commonly used in phishing attacks.'
      : threat_level === 'suspicious'
      ? 'Potentially suspicious content detected. Exercise caution and verify the source before taking any actions.'
      : 'Content appears safe. No significant phishing indicators detected.';
    
    setResult({ threat_level, confidence, analysis, indicators });
    setIsAnalyzing(false);
  };

  const getThreatColor = (level: ThreatLevel) => {
    switch (level) {
      case 'safe': return 'text-green-400';
      case 'suspicious': return 'text-yellow-400';
      case 'dangerous': return 'text-red-400';
    }
  };

  const getThreatIcon = (level: ThreatLevel) => {
    switch (level) {
      case 'safe': return <CheckCircle className="h-6 w-6 text-green-400" />;
      case 'suspicious': return <AlertTriangle className="h-6 w-6 text-yellow-400" />;
      case 'dangerous': return <AlertTriangle className="h-6 w-6 text-red-400" />;
    }
  };

  return (
    <section id="detection" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Phishing Detection</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Paste suspicious content below and let our AI analyze it for potential phishing threats
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Scan className="h-5 w-5 text-blue-400" />
                Content Analysis
              </CardTitle>
              <CardDescription className="text-gray-400">
                Enter text content or URLs to analyze for phishing indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-700/50">
                  <TabsTrigger value="text" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Text Content
                  </TabsTrigger>
                  <TabsTrigger value="url" className="flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    URL Analysis
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="space-y-4">
                  <Textarea
                    placeholder="Paste email content, messages, or any suspicious text here..."
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="min-h-32 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                  <Button 
                    onClick={() => analyzeContent(textInput, 'text')}
                    disabled={!textInput.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Shield className="h-4 w-4 mr-2" />
                        Analyze Text
                      </>
                    )}
                  </Button>
                </TabsContent>
                
                <TabsContent value="url" className="space-y-4">
                  <Input
                    placeholder="https://suspicious-website.com"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                  <Button 
                    onClick={() => analyzeContent(urlInput, 'url')}
                    disabled={!urlInput.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Shield className="h-4 w-4 mr-2" />
                        Analyze URL
                      </>
                    )}
                  </Button>
                </TabsContent>
              </Tabs>

              {result && (
                <Card className="mt-6 bg-slate-700/30 border-slate-600">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        {getThreatIcon(result.threat_level)}
                        Analysis Results
                      </div>
                      <Badge variant="outline" className={`${getThreatColor(result.threat_level)} border-current`}>
                        {result.confidence}% Confidence
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-slate-800/50">
                      <h4 className={`font-semibold mb-2 ${getThreatColor(result.threat_level)} uppercase text-sm`}>
                        {result.threat_level} Content
                      </h4>
                      <p className="text-gray-300">{result.analysis}</p>
                    </div>
                    
                    {result.indicators.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">Detected Indicators:</h4>
                        <ul className="space-y-1">
                          {result.indicators.map((indicator, index) => (
                            <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                              {indicator}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
