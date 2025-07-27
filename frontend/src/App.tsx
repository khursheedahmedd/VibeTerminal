import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TerminalLanding from "./pages/TerminalLanding";
import Features from "./pages/Features";
import Install from "./pages/Install";
import Docs from "./pages/Docs";
import SessionReplay from "./pages/SessionReplay";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import VideoStoryboard from "./pages/VideoStoryboard";
import Plans from "./pages/Plans";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  // No forced dark mode; use light mode by default
  // useEffect removed

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Set white bg and default text-gray-800 (for non-gradient text) */}
          <div className="min-h-screen bg-white text-gray-800">
            <Navigation />
            <Routes>
              <Route path="/" element={<TerminalLanding />} />
              <Route path="/features" element={<Features />} />
              <Route path="/install" element={<Install />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/replay" element={<SessionReplay />} />
              <Route path="/about" element={<About />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/video-storyboard" element={<VideoStoryboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
