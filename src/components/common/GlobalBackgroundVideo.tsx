import { useEffect, useRef } from "react";

/**
 * Global background video that displays with 100% natural clarity, brightness,
 * and brilliance across all pages.
 */
export function GlobalBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay retry:", err);
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden pointer-events-none select-none bg-black"
    >
      {/* 100% Clear, Bright, and Natural Full-Screen Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover brightness-105 contrast-105"
      >
        <source src="/sample.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
