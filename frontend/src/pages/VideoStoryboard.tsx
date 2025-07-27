import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clapperboard, Film, Type, Camera, Music, Wand2 } from 'lucide-react';

const storyboardScenes = [
  {
    scene: 1,
    title: "The Problem",
    visual: "A crowded, messy CLI terminal with command errors, \"command not found,\" and confusing flags.",
    textOverlay: "\"Your terminal doesn't listen. It reacts.\"",
    camera: "Slow zoom into blinking cursor with frustration on screen.",
    mood: "Dark, slow, ambient noise.",
  },
  {
    scene: 2,
    title: "The Arrival",
    visual: "CLI clears. Cursor types: curl -sSL install.nova.sh | sudo bash. Terminal transforms into a glowing modern interface.",
    textOverlay: "\"Introducing TerminalNova AI\"",
    camera: "Smooth horizontal pan + glitch transition",
    fx: "Futuristic startup sound, soft lens flare",
  },
  {
    scene: 3,
    title: "AI in Action",
    visual: "User types: tn \"List hidden files\" → AI responds ls -a. Side Panel: Agent explaining why the command was chosen.",
    textOverlay: "\"Smart suggestions. LLM-powered.\"",
    fx: "Typing animation, auto-complete spark lines",
  },
  {
    scene: 4,
    title: "Context-Aware Agent",
    visual: "Terminal tree shown. tn --context parses it, builds summary. Output shows a file tree, recent commands, and AI insight.",
    textOverlay: "\"Understands your workspace.\"",
  },
  {
    scene: 5,
    title: "File Diff Interaction",
    visual: "Side-by-side file before/after changes. Command: tn -f main.py → AI suggests patch.",
    textOverlay: "\"Edit with confidence.\"",
    fx: "Terminal becomes a diff viewer, shows \"Apply patch? (Y/N)\"",
  },
  {
    scene: 6,
    title: "Hybrid Mode",
    visual: "Terminal shows LLM toggle — \"Offline Ollama model active\". Suddenly falls back to \"Groq Cloud API\" due to resource overload.",
    textOverlay: "\"Offline or cloud. Always on.\"",
    camera: "Split-screen showing Ollama on left, Groq API on right",
  },
  {
    scene: 7,
    title: "Undo, Dry-Run, & Safety",
    visual: "Command executed: tn -a --undo. Output: \"Rolling back last state change...\"",
    textOverlay: "\"Undo. Dry-run. Always in control.\"",
    mood: "Calm and reassuring UX sound",
  },
  {
    scene: 8,
    title: "Voice Mode Preview",
    visual: "Terminal with mic icon listening → speech waveform. Spoken: \"Update Nginx config\". Command typed by AI: sudo nano /etc/nginx/nginx.conf",
    textOverlay: "\"Voice-first interaction (optional)\"",
  },
  {
    scene: 9,
    title: "Final CTA",
    visual: "Clean hero frame: logo + animated command box. Install commands fade in: # Ubuntu, # macOS, # Windows.",
    textOverlay: "\"Your terminal, reinvented.\"",
    camera: "Zoom out from screen to global network of developers",
  },
];

const VideoStoryboard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen pt-20">
      <div className="text-center mb-16">
        <Clapperboard className="w-16 h-16 mx-auto mb-4 text-[#7AFBED]" />
        <h1 className="text-5xl font-bold mb-4 text-white dark:text-white text-gray-900">TerminalNova AI: Promo Video Storyboard</h1>
        <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-700">A cinematic journey into the future of the command line.</p>
      </div>

      <div className="space-y-8">
        {storyboardScenes.map((item) => (
          <Card key={item.scene} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 dark:bg-gray-800/50 dark:border-gray-700 bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#7AFBED] text-2xl font-bold text-white">
                Scene {item.scene}: {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300 dark:text-gray-300 text-gray-700">
              {item.visual && <p className="flex items-start"><Film className="w-5 h-5 mr-3 mt-1 shrink-0" /><span><strong>Visual:</strong> {item.visual}</span></p>}
              {item.textOverlay && <p className="flex items-start"><Type className="w-5 h-5 mr-3 mt-1 shrink-0" /><span><strong>Text Overlay:</strong> {item.textOverlay}</span></p>}
              {item.camera && <p className="flex items-start"><Camera className="w-5 h-5 mr-3 mt-1 shrink-0" /><span><strong>Camera:</strong> {item.camera}</span></p>}
              {item.mood && <p className="flex items-start"><Music className="w-5 h-5 mr-3 mt-1 shrink-0" /><span><strong>Mood/Sound:</strong> {item.mood}</span></p>}
              {item.fx && <p className="flex items-start"><Wand2 className="w-5 h-5 mr-3 mt-1 shrink-0" /><span><strong>FX:</strong> {item.fx}</span></p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoStoryboard;
