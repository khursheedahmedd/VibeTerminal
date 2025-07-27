import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Linkedin, Globe, Star, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former Google engineer passionate about making terminals more human-friendly.',
      avatar: 'AC',
      social: { twitter: '@alexchen', github: 'alexchen', linkedin: 'alexchen' }
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      bio: 'AI/ML expert with 10+ years building developer tools at Microsoft.',
      avatar: 'SR',
      social: { twitter: '@sarahrod', github: 'srodriguez', linkedin: 'sarah-rodriguez' }
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Engineer',
      bio: 'Terminal enthusiast and open-source contributor since 2015.',
      avatar: 'MJ',
      social: { twitter: '@marcusj', github: 'mjohnson', linkedin: 'marcus-johnson' }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'AI Research Lead',
      bio: 'PhD in Computer Science, specialized in natural language processing.',
      avatar: 'EW',
      social: { twitter: '@emilyai', github: 'ewatson', linkedin: 'emily-watson-phd' }
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Commands Executed', value: '2.5M+', icon: <Zap className="w-6 h-6" /> },
    { label: 'GitHub Stars', value: '15.2k', icon: <Star className="w-6 h-6" /> }
  ];

  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'shipped',
      title: 'Voice Commands 2.0',
      description: 'Enhanced voice recognition with 40+ languages and offline support.',
      features: ['Multi-language support', 'Offline voice processing', 'Custom wake words']
    },
    {
      quarter: 'Q2 2024',
      status: 'in-progress',
      title: 'Team Collaboration',
      description: 'Share sessions and templates across your organization.',
      features: ['Session sharing', 'Team workspaces', 'Permission management']
    },
    {
      quarter: 'Q3 2024',
      status: 'planned',
      title: 'IDE Integration',
      description: 'Native integration with VS Code, JetBrains, and Vim/Neovim.',
      features: ['VS Code extension', 'JetBrains plugin', 'Terminal integration']
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      title: 'Enterprise Features',
      description: 'Advanced security, compliance, and enterprise deployment options.',
      features: ['SSO integration', 'Audit logging', 'On-premise deployment']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shipped': return 'bg-green-500/10 text-green-400';
      case 'in-progress': return 'bg-yellow-500/10 text-yellow-400';
      case 'planned': return 'bg-blue-500/10 text-blue-400';
      default: return 'bg-gray-500/10 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#f7f7f8]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            About VibeTerminal.CLI
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make the terminal more human-friendly. 
            TerminalNova AI bridges the gap between natural language and command-line interfaces, 
            empowering developers to work faster and more intuitively.
          </p>
        </div>
        {/* Stats Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-700">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* Story Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-900">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                TerminalNova AI started as a weekend project in 2023 when our founder, Alex Chen, 
                got frustrated explaining terminal commands to his junior developer colleagues. 
                "Why can't I just tell the terminal what I want to do?" he wondered.
              </p>
              <p>
                That simple question sparked the creation of TerminalNova. We believe that 
                the command line is one of the most powerful tools in a developer's arsenal, 
                but it shouldn't require memorizing hundreds of commands and flags to be effective.
              </p>
              <p>
                Our AI-powered terminal assistant uses natural language processing to understand 
                what you want to accomplish and translates it into the appropriate commands. 
                But we didn't stop there—we added safety features, voice control, plugin extensibility, 
                and session replay to create a truly next-generation terminal experience.
              </p>
              <p>
                Today, TerminalNova AI is used by thousands of developers worldwide, from 
                individual freelancers to teams at Fortune 500 companies. We're still just 
                getting started on our mission to make the terminal more accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Team Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-white border border-gray-200 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-700 font-bold text-xl">
                  {member.avatar}
                </div>
                <CardTitle className="text-xl text-gray-700">{member.name}</CardTitle>
                <Badge className="mx-auto bg-gray-100 text-gray-500">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Roadmap Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Public Roadmap</h2>
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          We believe in transparency. Here's what we're working on and what's coming next. 
          Have feedback or suggestions? Join our Discord to influence our roadmap.
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status === 'shipped' ? '✓ Shipped' : 
                        item.status === 'in-progress' ? '🔄 In Progress' : 
                        '📋 Planned'}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.quarter}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-700">{item.title}</CardTitle>
                <CardDescription className="text-gray-500">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="border-gray-200 text-gray-400">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Values Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white border border-gray-200 text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <CardTitle className="text-gray-700">Developer-First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                We're developers building for developers. Every feature is designed with real-world 
                workflows in mind, tested by our team who use TerminalNova daily.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-200 text-center">
            <CardHeader>
              <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <CardTitle className="text-gray-700">Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Your code and commands are yours. We operate locally-first, with optional cloud 
                features that you control. No telemetry, no tracking, no compromise.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-200 text-center">
            <CardHeader>
              <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <CardTitle className="text-gray-700">Open Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                TerminalNova is extensible by design. Our plugin system and open APIs enable 
                the community to build amazing integrations and customizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white border border-gray-200">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Join Our Mission</h3>
            <p className="text-xl text-gray-500 mb-8">
              Help us build the future of terminal interfaces. Whether you're a user, contributor, 
              or just curious about what we're building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black font-bold"
              >
                <Github className="w-5 h-5 mr-2" />
                <span className="text-black">Contribute on GitHub</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black"
              >
                Join Our Discord
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;
