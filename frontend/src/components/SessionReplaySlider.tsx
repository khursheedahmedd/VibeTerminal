
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const sessionCommands = [
  {
    label: "Start Recording",
    command: "$ VibeTerminal record start"
  },
  {
    label: "Stop Recording",
    command: "$ VibeTerminal record stop"
  },
  {
    label: "Replay Session",
    command: "$ VibeTerminal replay <session-id>"
  },
];

const SessionReplaySlider = () => (
  <section className="w-full py-10">
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-12 shadow-2xl animate-fade-in font-sans">
        <div className="flex-1 w-full">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center gap-4 text-black drop-shadow-none font-sans">
            <span className="inline-block w-4 h-4 bg-black rounded-full mr-3"></span>
            Session Record & Replay
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl mb-7 text-gray-800 font-semibold font-sans">
            Instantly record your shell workflow — then replay, debug, or share
            <span className="inline-block align-middle bg-black text-white text-base px-3 rounded ml-4 font-bold font-sans">
              NEW
            </span>
          </p>

          <div className="w-full max-w-md pt-1">
            <Carousel opts={{
              loop: true,
              align: 'start'
            }}>
              <CarouselContent>
                {sessionCommands.map((entry, idx) => (
                  <CarouselItem key={idx}>
                    <div className="bg-gray-100 rounded-xl px-6 py-7 text-black font-mono text-md sm:text-lg flex flex-col gap-2 w-full shadow font-sans">
                      <div>
                        <span className="text-black text-base font-bold font-mono pr-1">$</span>
                        {entry.command.replace(/^\$/, "").trim()}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col items-center mt-2 md:mt-0 min-w-[180px]">
          <Button
            size="lg"
            className="bg-black text-white px-9 py-4 rounded-3xl font-extrabold text-2xl shadow-xl text-center hover:scale-105 transition-transform cursor-pointer w-full"
          >
            Try Replay
          </Button>
          <span className="text-base text-gray-800 font-semibold mt-2 text-center">
            Replay and share your dev session
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default SessionReplaySlider;
