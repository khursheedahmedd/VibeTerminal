
import React, { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Command = {
  label: string;
  code: string;
  highlight?: boolean;
};

interface CliGallerySliderProps {
  commands: Command[];
}

const AUTOPLAY_INTERVAL = 2500; // milliseconds

const CliGallerySlider: React.FC<CliGallerySliderProps> = ({ commands }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (emblaApi) {
      autoplayRef.current = setInterval(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, AUTOPLAY_INTERVAL);
    }
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (emblaApi) startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  // Pause on hover
  useEffect(() => {
    const emblaRoot = emblaRef.current as HTMLElement | null;
    if (!emblaRoot) return;

    const handleMouseEnter = () => stopAutoplay();
    const handleMouseLeave = () => startAutoplay();

    emblaRoot.addEventListener("mouseenter", handleMouseEnter);
    emblaRoot.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      emblaRoot.removeEventListener("mouseenter", handleMouseEnter);
      emblaRoot.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [emblaRef, startAutoplay, stopAutoplay]);

  return (
    <div className="w-full overflow-x-visible py-3" ref={emblaRef}>
      <div className="flex gap-6 ml-0">
        {commands.map((item, idx) => (
          <div
            key={idx}
            className={`min-w-[260px] max-w-xs rounded-2xl bg-white text-black p-5 flex-shrink-0 shadow-md border 
              ${item.highlight ? "border-2 border-black font-bold" : "border-gray-300"}
              transition-all duration-200`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className={`font-semibold text-xs uppercase tracking-wide ${item.highlight ? "text-black" : "text-gray-700"}`}>
                {item.label}
              </span>
            </div>
            <pre className="font-mono text-sm break-words whitespace-pre-wrap text-gray-900">{item.code}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CliGallerySlider;
