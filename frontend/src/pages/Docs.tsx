import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Book, Search, Code, Terminal, Zap, Shield, Globe, Mic, Copy, CheckCircle, ArrowRight } from 'lucide-react';

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const docSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-5 h-5 text-gray-400" />,
      description: 'Quick setup and first commands'
    },
    {
      id: 'basic-usage',
      title: 'Basic Usage',
      icon: <Terminal className="w-5 h-5 text-gray-400" />,
      description: 'Fundamental operations'
    },
    {
      id: 'agent-mode',
      title: 'Agent Mode',
      icon: <Globe className="w-5 h-5 text-gray-400" />,
      description: 'AI-powered assistance'
    },
    {
      id: 'voice-commands',
      title: 'Voice Commands',
      icon: <Mic className="w-5 h-5 text-gray-400" />,
      description: 'Hands-free operation'
    },
    {
      id: 'safety-features',
      title: 'Safety Features',
      icon: <Shield className="w-5 h-5 text-gray-400" />,
      description: 'Undo, dry-run, and safety'
    }
  ];

  const docContent = {
    'getting-started': {
      title: 'Getting Started with TerminalNova',
      content: [
        {
          heading: 'Installation',
          text: 'Install TerminalNova with a single command on any platform.',
          code: 'curl -sSL install.nova.sh | sudo bash'
        },
        {
          heading: 'First Command',
          text: 'Test your installation with a simple command.',
          code: 'nova "list all files in current directory"'
        },
        {
          heading: 'Shell Integration',
          text: 'Enable autocomplete and enhanced features.',
          code: 'echo \'eval "$(nova init bash)"\' >> ~/.bashrc && source ~/.bashrc'
        }
      ]
    },
    'basic-usage': {
      title: 'Basic Usage Patterns',
      content: [
        {
          heading: 'Natural Language Commands',
          text: 'Describe what you want to do in plain English.',
          code: 'nova "find all Python files modified in the last week"'
        },
        {
          heading: 'File Operations',
          text: 'Perform complex file operations with simple descriptions.',
          code: 'nova "move all .log files to the logs directory"'
        },
        {
          heading: 'System Information',
          text: 'Get system information in a human-readable format.',
          code: 'nova "show me system resources and running processes"'
        }
      ]
    },
    'safety-features': {
      title: 'Safety and Security Features',
      content: [
        {
          heading: 'Dry Run Mode',
          text: 'Preview commands before execution to avoid mistakes.',
          code: 'nova --dry-run "delete all temporary files"'
        },
        {
          heading: 'Undo Capability',
          text: 'Enable undo for reversible operations.',
          code: 'nova --undo "reorganize project files"'
        },
        {
          heading: 'Safety Rules',
          text: 'Configure custom safety rules for dangerous operations.',
          code: 'nova config safety --require-confirmation destructive'
        }
      ]
    }
  };

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const currentSection = docContent[selectedSection as keyof typeof docContent];

  return (
    <div className="min-h-screen pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-700">
            Documentation
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Everything you need to master TerminalNova AI. From basic commands to advanced plugin development.
          </p>
        </div>
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-400 focus:border-gray-600 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Documentation Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-white border border-gray-200 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-700">
                  <Book className="w-5 h-5 mr-2 text-gray-400" />
                  Sections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {docSections.map((section) => (
                  <Button
                    key={section.id}
                    variant="outline"
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full justify-start border border-gray-200 bg-white text-black hover:bg-gray-50 hover:text-black ${
                      selectedSection === section.id
                        ? 'bg-white text-black font-bold'
                        : ''
                    }`}
                  >
                    {section.icon}
                    <div className="ml-3 text-left">
                      <div className="font-medium">{section.title}</div>
                      <div className="text-xs opacity-70">{section.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-700">{currentSection.title}</CardTitle>
                <Badge className="w-fit border border-gray-200 bg-gray-50 text-gray-600 font-medium">
                  {docSections.find(s => s.id === selectedSection)?.title}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-8">
                {currentSection.content.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                      <ArrowRight className="w-5 h-5 mr-2 text-gray-400" />
                      {item.heading}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm">Command:</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(item.code)}
                          className="bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black"
                        >
                          {copiedCommand === item.code
                            ? <CheckCircle className="w-4 h-4 text-gray-500" />
                            : <Copy className="w-4 h-4 text-gray-500" />
                          }
                        </Button>
                      </div>
                      <code className="text-gray-700 font-mono text-sm block">
                        {item.code}
                      </code>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-700">
                    <Terminal className="w-5 h-5 mr-2 text-gray-400" />
                    CLI Reference
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Complete command reference with examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-gray-300 bg-white text-black hover:bg-gray-50 hover:text-black w-full"
                  >
                    View CLI Reference
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-700">
                    <Code className="w-5 h-5 mr-2 text-gray-400" />
                    API Documentation
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Plugin development and API reference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-gray-300 bg-white text-black hover:bg-gray-50 hover:text-black w-full"
                  >
                    View API Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div >
      </section>

      {/* Help Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white border border-gray-200">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Need More Help?</h3>
            <p className="text-xl text-gray-500 mb-8">
              Our community is here to help you succeed with TerminalNova AI.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-700">Tutorials</h4>
                <p className="text-gray-500 text-sm mb-4">Step-by-step guides for common workflows</p>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-white text-black hover:bg-gray-50 hover:text-black w-full"
                >
                  Browse Tutorials
                </Button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-700">Community Forum</h4>
                <p className="text-gray-500 text-sm mb-4">Get help from other TerminalNova users</p>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-white text-black hover:bg-gray-50 hover:text-black w-full"
                >
                  Join Forum
                </Button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-700">Discord</h4>
                <p className="text-gray-500 text-sm mb-4">Real-time chat with the community</p>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-white text-black hover:bg-gray-50 hover:text-black w-full"
                >
                  Join Discord
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Docs;
