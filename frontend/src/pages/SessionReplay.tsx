import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Download, Share, Clock, Terminal, FileText, PlayCircle } from 'lucide-react';

const SessionReplay = () => {
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const sessions = [
    {
      id: '1',
      title: 'Docker Container Debugging Session',
      date: '2024-01-15',
      duration: '12:34',
      commands: 23,
      description: 'Troubleshooting a production container networking issue',
      tags: ['docker', 'networking', 'debugging'],
      thumbnail: 'docker-debug'
    },
    {
      id: '2',
      title: 'AWS Infrastructure Setup',
      date: '2024-01-14',
      duration: '08:45',
      commands: 15,
      description: 'Setting up EC2 instances and load balancers',
      tags: ['aws', 'infrastructure', 'setup'],
      thumbnail: 'aws-setup'
    },
    {
      id: '3',
      title: 'Git Workflow Tutorial',
      date: '2024-01-13',
      duration: '15:22',
      commands: 31,
      description: 'Demonstrating advanced Git branching strategies',
      tags: ['git', 'tutorial', 'workflow'],
      thumbnail: 'git-workflow'
    },
    {
      id: '4',
      title: 'Database Migration Process',
      date: '2024-01-12',
      duration: '06:18',
      commands: 12,
      description: 'PostgreSQL schema migration with zero downtime',
      tags: ['postgresql', 'migration', 'database'],
      thumbnail: 'db-migration'
    }
  ];

  const sessionSteps = [
    {
      timestamp: '00:00',
      command: 'nova "show me all running containers"',
      output: 'CONTAINER ID   IMAGE     COMMAND   STATUS\na1b2c3d4e5f6   nginx     "nginx"   Up 2 hours\nb2c3d4e5f6a1   redis     "redis"   Up 1 hour',
      type: 'command'
    },
    {
      timestamp: '00:15',
      command: 'nova --agent "why is nginx container using so much memory?"',
      output: '🤖 Analyzing nginx container memory usage...\n✓ Found memory leak in nginx configuration\n⚡ Suggested fix: Update nginx.conf with proper worker settings',
      type: 'agent'
    },
    {
      timestamp: '00:45',
      command: 'docker exec -it a1b2c3d4e5f6 cat /etc/nginx/nginx.conf',
      output: 'worker_processes auto;\nworker_connections 1024;\n# ... configuration continues',
      type: 'command'
    }
  ];

  const exportFormats = [
    { format: 'Markdown', description: 'Human-readable documentation format', icon: <FileText className="w-4 h-4" /> },
    { format: 'JSON', description: 'Machine-readable structured data', icon: <Terminal className="w-4 h-4" /> },
    { format: 'Video', description: 'Animated terminal recording', icon: <PlayCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Session Replay
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Record, replay, and share your terminal sessions. Perfect for debugging, tutorials, 
            and knowledge sharing across your team.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Session List */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#7AFBED]" />
                  Recent Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessions.map((session) => (
                  <Card 
                    key={session.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedSession === session.id 
                        ? 'border-[#7AFBED] bg-[#7AFBED]/5' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedSession(session.id)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{session.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {session.duration}
                        </span>
                        <span className="flex items-center">
                          <Terminal className="w-3 h-3 mr-1" />
                          {session.commands} commands
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-300 mb-3">{session.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {session.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Player */}
          <div className="lg:col-span-2 space-y-6">
            {selectedSession ? (
              <>
                {/* Player Controls */}
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{sessions.find(s => s.id === selectedSession)?.title}</span>
                      <Badge className="bg-[#7AFBED]/10 text-[#7AFBED]">
                        {sessions.find(s => s.id === selectedSession)?.date}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 ml-4">nova@terminal - Session Replay</span>
                      </div>
                      
                      {/* Mock terminal content */}
                      <div className="font-mono text-sm space-y-2">
                        {sessionSteps.map((step, index) => (
                          <div key={index} className="space-y-1">
                            <div className="text-gray-400 text-xs">[{step.timestamp}]</div>
                            <div className="text-[#7AFBED]">$ {step.command}</div>
                            <div className="text-gray-100 whitespace-pre-line pl-2 border-l-2 border-gray-700">
                              {step.output}
                            </div>
                          </div>
                        ))}
                        <div className="text-[#7AFBED] animate-pulse">▋</div>
                      </div>
                    </div>

                    {/* Playback Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-[#7AFBED] text-gray-900 hover:bg-[#5fd9d0]"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button variant="outline" className="border-gray-600 text-gray-300">
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">Speed:</span>
                          {[0.5, 1, 1.5, 2].map((speed) => (
                            <Button
                              key={speed}
                              size="sm"
                              variant={playbackSpeed === speed ? "default" : "outline"}
                              onClick={() => setPlaybackSpeed(speed)}
                              className={playbackSpeed === speed ? "bg-[#7AFBED] text-gray-900" : "border-gray-600 text-gray-300"}
                            >
                              {speed}x
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" className="border-gray-600 text-gray-300">
                          <Share className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                        <Button variant="outline" className="border-gray-600 text-gray-300">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 bg-gray-700 rounded-full h-2">
                      <div className="bg-[#7AFBED] h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>04:25</span>
                      <span>12:34</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Export Options */}
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle>Export Session</CardTitle>
                    <CardDescription className="text-gray-300">
                      Share your session in different formats for documentation or tutorials.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {exportFormats.map((format, index) => (
                        <Card key={index} className="border-gray-600 hover:border-[#7AFBED]/50 transition-colors cursor-pointer">
                          <CardContent className="pt-6 text-center">
                            <div className="w-12 h-12 bg-[#7AFBED]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7AFBED]">
                              {format.icon}
                            </div>
                            <h4 className="font-semibold mb-2">{format.format}</h4>
                            <p className="text-sm text-gray-400">{format.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="py-20 text-center">
                  <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a Session to Replay</h3>
                  <p className="text-gray-400">Choose a session from the list to start watching the replay.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Session Replay Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
            <CardHeader>
              <Terminal className="w-12 h-12 text-[#7AFBED] mx-auto mb-4" />
              <CardTitle>Context Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                See the full context of each command including file system state, environment variables, and working directory.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
            <CardHeader>
              <PlayCircle className="w-12 h-12 text-[#7AFBED] mx-auto mb-4" />
              <CardTitle>Variable Playback Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Control playback speed from 0.5x to 2x to focus on specific commands or get a quick overview.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
            <CardHeader>
              <Share className="w-12 h-12 text-[#7AFBED] mx-auto mb-4" />
              <CardTitle>Easy Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Export sessions as videos, documentation, or share links with your team for debugging and learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-r from-[#7AFBED]/10 to-blue-500/10 border-[#7AFBED]/50">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Start Recording Your Sessions</h3>
            <p className="text-xl text-gray-300 mb-8">
              Capture your terminal workflows and share knowledge with your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#7AFBED] to-blue-500 text-gray-900 hover:from-[#5fd9d0] hover:to-blue-600">
                Enable Session Recording
              </Button>
              <Button size="lg" variant="outline" className="border-[#7AFBED] text-[#7AFBED] hover:bg-[#7AFBED]/10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SessionReplay;
