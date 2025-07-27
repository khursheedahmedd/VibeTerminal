import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Terminal, Star, Download, Github, Menu, X, Zap, Shield, Brain, Mic, Code, Globe, Play, CheckCircle, Copy, ArrowRight, Lock, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import TerminalDemo from "@/components/TerminalDemo";
// REMOVED: import CliGallerySlider from "@/components/CliGallerySlider";
// REMOVED: import SessionReplaySlider from "@/components/SessionReplaySlider";

const cliGalleryCommands = [
  {
    label: "Prompting",
    code: `VibeTerminal "list files in /tmp and delete those >100MB"`,
    highlight: true,
  },
  {
    label: "Agent Mode",
    code: "VibeTerminal --agent 'deploy staging server'",
    highlight: true,
  },
  {
    label: "File Edit (diff)",
    code: "VibeTerminal --file app.py",
    highlight: true,
  },
  {
    label: "Context Sharing",
    code: "VibeTerminal --context",
    highlight: true,
  }
];

const TerminalLanding = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [copiedCommand, setCopiedCommand] = useState<number | null>(null);

  const installCommands = [
    { platform: "Debian / Ubuntu", command: "curl -sSL install.nova.sh | sudo bash" },
    { platform: "macOS", command: "brew tap novaterm/cli && brew install novaterm" },
    { platform: "Windows", command: "winget install TerminalNova.CLI" },
    { platform: "Arch Linux", command: "yay -S terminalnova-bin" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % installCommands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(index);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "One-Command Install & Shell Hooks",
      description: "Zero configuration setup with automatic shell integration across all platforms."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Context-Aware Chat & Agent Mode",
      description: "AI that understands your project context and suggests intelligent next steps."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Offline + Cloud LLMs, Seamless Fallback",
      description: "Works locally for privacy, switches to cloud for complex reasoning automatically."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice-enabled Conversational Shell",
      description: "Speak your commands naturally and get audio responses for hands-free coding."
    }
  ];

  const deepDiveFeatures = [
    { title: "Installation", icon: <Download className="w-4 h-4" />, content: "One-line installers for every platform with automatic PATH configuration." },
    { title: "Core CLI", icon: <Terminal className="w-4 h-4" />, content: "Enhanced shell with syntax highlighting, autocomplete, and smart history." },
    { title: "NLP Assistance", icon: <Brain className="w-4 h-4" />, content: "Natural language to command translation with context understanding." },
    { title: "Hybrid LLM", icon: <Globe className="w-4 h-4" />, content: "Local models for privacy, cloud models for complex reasoning." },
    { title: "Voice Control", icon: <Mic className="w-4 h-4" />, content: "Hands-free terminal operation with voice commands and audio feedback." },
    { title: "Proactive AI", icon: <Sparkles className="w-4 h-4" />, content: "AI suggests optimizations and catches potential issues before execution." },
    { title: "Rule Engine", icon: <Shield className="w-4 h-4" />, content: "Custom safety rules and automated approval workflows for dangerous commands." },
    { title: "Rich Output", icon: <Play className="w-4 h-4" />, content: "Beautiful formatting, charts, and visualizations in your terminal." },
    { title: "Session Replay", icon: <ArrowRight className="w-4 h-4" />, content: "Record, replay, and share terminal sessions for debugging and teaching." }
  ];

  const testimonials = [
    {
      quote: "TerminalNova has transformed how our team approaches DevOps. The AI suggestions are incredibly accurate.",
      author: "Sarah Chen",
      title: "CTO, CloudTech Solutions",
      avatar: "SC"
    },
    {
      quote: "Finally, a terminal assistant that actually understands context. It's like having a senior engineer pair with you.",
      author: "Marcus Rodriguez",
      title: "Lead Engineer, DataFlow Inc",
      avatar: "MR"
    },
    {
      quote: "The voice commands feature is a game-changer during presentations and code reviews.",
      author: "Emily Watson",
      title: "VP Engineering, StartupCorp",
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-[#ebecf0] text-gray-950 pt-20">
      {/* HERO */}
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Minimal nav-bar look is handled by Navigation.tsx */}

          {/* MAIN HEADLINE */}
          <h1 className="text-[2.8rem] md:text-[4.2rem] font-extrabold text-center leading-tight text-gray-950 mb-6 tracking-tight">
            Super-charge your terminal,&nbsp;
            <span className="block md:inline">no learning curve</span>
          </h1>
          {/* SUBHEADLINE */}
          <p className="text-lg md:text-2xl font-normal text-gray-950 max-w-2xl text-center mb-8">
            Built for the humans behind the shell.<br />
            AI-powered assistant that understands commands, context, files, and lets you control or replay every workflow.
          </p>
          {/* STATIC CLI COMMANDS - replaces CliGallerySlider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mb-8">
            {cliGalleryCommands.map((cmd, idx) => (
              <div
                key={cmd.label + idx}
                className={`p-4 rounded-xl bg-white border shadow flex flex-col transition-all duration-150 ${
                  cmd.highlight ? "border-black" : "border-gray-200"
                }`}
              >
                <div className="font-semibold text-sm text-gray-700 mb-2">{cmd.label}</div>
                <div className="flex flex-row items-center gap-2">
                  <code className="font-mono text-xs sm:text-sm text-gray-800 break-all">
                    {cmd.code}
                  </code>
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="Copy command"
                    className="ml-1"
                    onClick={() => copyToClipboard(cmd.code, idx)}
                  >
                    {copiedCommand === idx ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-600" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full my-8">
            <Button className="bg-black text-white font-bold text-lg rounded-xl px-8 py-3 hover:bg-gray-900 transition w-full sm:w-auto">
              Install in One Command
            </Button>
            <Button
              className="bg-black text-white font-bold text-lg rounded-xl px-8 py-3 hover:bg-gray-900 transition w-full sm:w-auto"
            >
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Session Replay/Recording Feature Section */}
      {/* REMOVED: <SessionReplaySlider /> */}

      {/* Feature Grid */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Built for Power Users
          </h2>
          <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">Everything you need to supercharge your terminal workflow</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-400 h-full rounded-3xl">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4 mx-auto sm:mx-0">
                  {feature.icon}
                </div>
                <CardTitle className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent text-lg sm:text-xl text-center sm:text-left">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-950 text-center sm:text-left">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Deep Dive Accordion */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Explore Every Feature</h2>
          <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">Deep dive into what makes TerminalNova powerful</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {deepDiveFeatures.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-3xl px-4 sm:px-6">
                <AccordionTrigger className="hover:no-underline hover:text-gray-700 transition-colors py-4 sm:py-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-700">{feature.icon}</div>
                    <span className="text-left">{feature.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 sm:pb-6">
                  <div className="pl-7">
                    {feature.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Security Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Card className="bg-white border border-gray-200 max-w-4xl mx-auto rounded-3xl">
          <CardContent className="py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-center">
              <Lock className="w-8 h-8 text-gray-700 flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Security & Privacy First</h3>
                <p className="text-gray-950">Local-first. No telemetry. Your shell, your rules.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Loved by Engineering Teams</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 h-full rounded-3xl">
              <CardContent className="p-4 sm:p-6">
                <blockquote className="text-gray-950 mb-4 text-sm sm:text-base">"{testimonial.quote}"</blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base text-gray-950 truncate">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-gray-700 truncate">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100/50 backdrop-blur-sm border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-6 h-6 text-gray-700" />
                <span className="text-lg font-bold text-gray-950">VibeTerminal.CLI</span>
              </div>
              <p className="text-gray-950 text-sm">Built for the humans behind the shell.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-950">Product</h4>
              <div className="space-y-2 text-sm text-gray-950">
                <div><a href="#" className="hover:text-gray-700 transition-colors">Features</a></div>
                <div><a href="#" className="hover:text-gray-700 transition-colors">Pricing</a></div>
                <div><a href="#" className="hover:text-gray-700 transition-colors">Changelog</a></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-950">Resources</h4>
              <div className="space-y-2 text-sm text-gray-950">
                <div><a href="#" className="hover:text-gray-700 transition-colors">Documentation</a></div>
                <div><a href="#" className="hover:text-gray-700 transition-colors">API Reference</a></div>
                <div><a href="#" className="hover:text-gray-700 transition-colors">Tutorials</a></div>
                <div><a href="#" className="hover:text-gray-700 transition-colors">Community</a></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-950">Connect</h4>
              <div className="flex space-x-4">
                <Github className="w-5 h-5 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer" />
                <Star className="w-5 h-5 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          <Separator className="my-6 sm:my-8 bg-gray-200" />

          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 space-y-4 sm:space-y-0">
            <p className="text-gray-950">&copy; 2024 VibeTerminal.CLI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-700 transition-colors text-gray-950">Privacy</a>
              <a href="#" className="hover:text-gray-700 transition-colors text-gray-950">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TerminalLanding;

