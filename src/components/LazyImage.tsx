import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Image with graceful fade-in once loaded. Lazy by default. */
export function LazyImage({
  src,
  alt,
  className,
  wrapperClassName,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Cached images can complete before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className={cn("overflow-hidden bg-secondary", wrapperClassName)}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          loaded ? "scale-100 opacity-100 blur-0" : "scale-[1.03] opacity-0 blur-sm",
          className,
        )}
      />
    </div>
  );
}
