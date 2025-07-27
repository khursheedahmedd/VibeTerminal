import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, CheckCircle, Terminal, Download, AlertTriangle, Info } from 'lucide-react';

const Install = () => {
  const [detectedOS, setDetectedOS] = useState('');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const installCommands = [
    {
      os: 'Arch Linux',
      command: 'yay -S terminalnova-bin',
      description: 'Install from AUR (Arch User Repository)',
      icon: '🏔️'
    }
  ];

  const shellConfigs = [
    {
      shell: 'Bash',
      file: '~/.bashrc',
      command: 'echo \'eval "$(nova init bash)"\' >> ~/.bashrc && source ~/.bashrc'
    },
    {
      shell: 'Zsh',
      file: '~/.zshrc',
      command: 'echo \'eval "$(nova init zsh)"\' >> ~/.zshrc && source ~/.zshrc'
    },
    {
      shell: 'PowerShell',
      file: '$PROFILE',
      command: 'Add-Content $PROFILE \'Invoke-Expression (& nova init powershell)\''
    },
    {
      shell: 'Fish',
      file: '~/.config/fish/config.fish',
      command: 'echo \'nova init fish | source\' >> ~/.config/fish/config.fish'
    }
  ];

  const troubleshooting = [
    {
      issue: 'Command not found: nova',
      solution: 'Make sure the installation directory is in your PATH. Try restarting your terminal or running `source ~/.bashrc`'
    },
    {
      issue: 'Permission denied during installation',
      solution: 'The installer needs sudo access to create symlinks. Use `sudo curl -sSL install.nova.sh | bash`'
    },
    {
      issue: 'Autocomplete not working',
      solution: 'Run `nova --init` to set up shell integration. Make sure to restart your terminal afterwards.'
    },
    {
      issue: 'Proxy/firewall blocking installation',
      solution: 'Download the binary manually from GitHub releases and place it in your PATH.'
    }
  ];

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Mac')) setDetectedOS('macOS');
    else if (userAgent.includes('Win')) setDetectedOS('Windows');
    else if (userAgent.includes('Linux')) setDetectedOS('Ubuntu/Debian');
    else setDetectedOS('');
  }, []);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const getRecommendedCommand = () => {
    return installCommands.find(cmd => cmd.os === detectedOS) || installCommands[0];
  };

  return (
    <div className="min-h-screen pt-20 bg-[#f7f7f8]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Install TerminalNova AI
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Get up and running in less than 60 seconds. One command installs everything you need.
          </p>
          {detectedOS && (
            <span className="mt-4 inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
              Detected: {detectedOS}
            </span>
          )}
        </div>

        {/* Quick Install */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-700 font-bold">
                {detectedOS ? `Recommended for ${detectedOS}` : 'Quick Install'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Copy and paste in your terminal:</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(getRecommendedCommand().command)}
                    className="text-gray-500 hover:bg-gray-200"
                  >
                    {copiedCommand === getRecommendedCommand().command ? 
                      <CheckCircle className="w-4 h-4" /> : 
                      <Copy className="w-4 h-4" />
                    }
                  </Button>
                </div>
                <code className="text-gray-700 font-mono text-lg block bg-white p-3 rounded">
                  {getRecommendedCommand().command}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Installation Options */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">All Installation Options</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {installCommands.map((install, index) => (
            <Card key={index} className="bg-white text-gray-800 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-700 font-bold">
                  <span className="text-2xl mr-3">{install.icon}</span>
                  {install.os}
                </CardTitle>
                <CardDescription className="text-gray-500">
                  {install.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-gray-700 font-mono text-sm flex-1 bg-white p-2 rounded">
                      {install.command}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(install.command)}
                      className="text-gray-500 hover:bg-gray-200 ml-2"
                    >
                      {copiedCommand === install.command ? 
                        <CheckCircle className="w-4 h-4" /> : 
                        <Copy className="w-4 h-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Shell Configuration */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Shell Integration</h2>
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          After installation, set up shell integration for autocomplete and enhanced features.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {shellConfigs.map((shell, index) => (
            <Card key={index} className="bg-white text-gray-800 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-700 font-bold">{shell.shell}</CardTitle>
                <CardDescription className="text-gray-400">
                  Add to {shell.file}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded p-4">
                  <div className="flex items-start justify-between">
                    <code className="text-gray-700 font-mono text-sm flex-1 break-all bg-white p-2 rounded">
                      {shell.command}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(shell.command)}
                      className="text-gray-500 hover:bg-gray-200 ml-2 flex-shrink-0"
                    >
                      {copiedCommand === shell.command ? 
                        <CheckCircle className="w-4 h-4" /> : 
                        <Copy className="w-4 h-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Permissions & Security */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white text-gray-800 border border-gray-200 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary-neon font-bold">
              <AlertTriangle className="w-6 h-6 text-gray-400 mr-3" />
              Permissions & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Minimal sudo required</h4>
                <p className="text-gray-500">Installation needs sudo only to create symlinks in /usr/local/bin. No persistent elevated privileges.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Secure API key storage</h4>
                <p className="text-gray-500">API keys stored in ~/.terminalnova/config.yaml with 600 permissions. Never transmitted in plaintext.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Local-first operation</h4>
                <p className="text-gray-500">Core functionality works offline. Cloud LLMs only used when explicitly requested.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Troubleshooting */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Troubleshooting</h2>
        
        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
          {troubleshooting.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline hover:text-gray-700 transition-colors font-bold">
                <span className="text-gray-700">{item.issue}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 pb-6">
                <div className="pl-4 border-l-2 border-gray-200">
                  {item.solution}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Next Steps */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white border border-gray-200 max-w-4xl mx-auto">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-primary-neon">What's Next?</h3>
            <p className="text-xl text-gray-500 mb-8">
              Installation complete! Here's how to get started.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Terminal className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-gray-700">Try Your First Command</h4>
                <code className="text-sm text-gray-600 bg-gray-100 p-2 rounded">nova "list all files"</code>
              </div>
              <div className="text-center">
                <Info className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-gray-700">Read the Docs</h4>
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-100 shadow"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Install;
