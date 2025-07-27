import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Mic, Brain, Zap, Shield, Globe, Play, Volume2, VolumeX } from 'lucide-react';

const Features = () => {
  const [activeDemo, setActiveDemo] = useState('agent');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  const features = [
    {
      id: 'agent',
      title: 'AI Agent Mode',
      icon: <Brain className="w-6 h-6" />,
      description: 'Context-aware command suggestions with natural language processing',
      demo: `I'll help you deploy to staging. Let me analyze your project...
✓ Found docker-compose.yml
✓ Staging environment configured  
 Suggested: docker-compose -f staging.yml up -d
Execute this command? (y/N)`
    },
    {
      id: 'voice',
      title: 'Voice Commands',
      icon: <Mic className="w-6 h-6" />,
      description: 'Speak naturally to your terminal for hands-free operation',
      demo: ` "Show me all Docker containers"
 Converting speech to command...
$ docker ps --all
CONTAINER ID   IMAGE     COMMAND   STATUS
a1b2c3d4e5f6   nginx     "nginx"   Up 2 hours`
    },
    {
      id: 'smart',
      title: 'Smart Autocomplete',
      icon: <Zap className="w-6 h-6" />,
      description: 'Intelligent suggestions based on your workflow and context',
      demo: `$ git comm[TAB]
 Smart suggestions:
→ git commit -m "feat: add new feature"
→ git commit --amend
→ git commit -S (signed commit)
Press Tab to cycle through options`
    },
    {
      id: 'safety',
      title: 'Safe Execution',
      icon: <Shield className="w-6 h-6" />,
      description: 'Preview dangerous commands with undo capabilities',
      demo: `$ nova "delete all temp files"
  DANGEROUS OPERATION DETECTED
Preview: find /tmp -name "*.tmp" -delete
 This will delete 47 files
[y] Execute [n] Cancel [d] Dry run [u] Enable undo`
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#f7f7f8]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Turn Your Terminal into an
            <span className="block text-gray-500 font-bold">
              AI Superpower
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A command-line agent that helps you code, automate, and fix errors — safely and intelligently.
            Every feature designed with HCI principles for maximum usability.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature) => (
              <Button
                key={feature.id}
                variant="outline"
                onClick={() => setActiveDemo(feature.id)}
                className={`bg-white border-gray-300 hover:bg-gray-100 text-gray-700 ${activeDemo === feature.id ? 'shadow-lg' : 'shadow'} transition-all duration-200`}
              >
                {feature.icon}
                <span className="ml-2 text-gray-700">
                  {feature.title}
                </span>
              </Button>
            ))}
          </div>

          <Card className="bg-white text-gray-800 border border-gray-200 rounded-3xl shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-700 flex items-center font-bold">
                  {features.find(f => f.id === activeDemo)?.icon}
                  <span className="ml-2">{features.find(f => f.id === activeDemo)?.title}</span>
                </CardTitle>
                {activeDemo === 'voice' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                    className="bg-white text-[#7AFBED] hover:bg-gray-100 border border-gray-200"
                  >
                    {isVoiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </Button>
                )}
              </div>
              <CardDescription className="text-gray-500">
                {features.find(f => f.id === activeDemo)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-6 font-mono text-sm text-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4">nova@terminal</span>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-gray-700">
                  {features.find(f => f.id === activeDemo)?.demo}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Built with HCI Principles
          </h2>
          <p className="text-xl text-gray-400">Every interaction optimized for cognitive ergonomics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardHeader>
              <Terminal className="w-12 h-12 text-gray-400 mb-4" />
              <CardTitle className="text-gray-700">Fitts' Law Compliance</CardTitle>
              <CardDescription className="text-gray-500">
                Larger click targets for primary actions. Install buttons and critical CTAs are sized for easy targeting.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardHeader>
              <Brain className="w-12 h-12 text-gray-400 mb-4" />
              <CardTitle className="text-gray-700">Miller's Rule (7±2)</CardTitle>
              <CardDescription className="text-gray-500">
                Features grouped into digestible chunks. Never more than 7 options visible at once.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardHeader>
              <Zap className="w-12 h-12 text-gray-400 mb-4" />
              <CardTitle className="text-gray-700">Hick's Law Optimization</CardTitle>
              <CardDescription className="text-gray-500">
                Maximum 3 primary CTAs per section. Reduced choice paralysis for faster decision making.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardHeader>
              <Globe className="w-12 h-12 text-gray-400 mb-4" />
              <CardTitle className="text-gray-700">Progressive Disclosure</CardTitle>
              <CardDescription className="text-gray-500">
                Advanced CLI flags hidden under "More" toggles. Start simple, reveal complexity on demand.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardHeader>
              <Shield className="w-12 h-12 text-gray-400 mb-4" />
              <CardTitle className="text-gray-700">System Status Visibility</CardTitle>
              <CardDescription className="text-gray-500">
                Always know what's happening. Loading states, CLI feedback, and command execution status.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-3xl">
            <CardHeader>
              <Play className="w-12 h-12 text-gray-400 mb-4" />
              <CardTitle className="text-gray-700">Error Prevention & Recovery</CardTitle>
              <CardDescription className="text-gray-500">
                Undo capabilities, dry-run mode, and dangerous command warnings. Mistakes become learning opportunities.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white text-gray-800 border border-gray-200 rounded-3xl shadow-md">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Supercharge Your Terminal?</h3>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of developers who've already upgraded their workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white border border-gray-300 font-bold text-gray-700 hover:bg-gray-100">
                Install Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700">
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Features;

