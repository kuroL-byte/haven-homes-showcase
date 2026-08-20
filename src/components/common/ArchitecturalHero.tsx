import { useEffect, useRef } from "react";

export function ArchitecturalHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback handling
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[500px] overflow-hidden bg-[#181d24]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
}
