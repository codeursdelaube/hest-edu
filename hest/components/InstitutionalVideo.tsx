"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  poster?: string;
  controls?: boolean;
  label?: string;
};

export default function InstitutionalVideo({
  className = "",
  poster = "/Hero.jpg",
  controls = false,
  label = "Vidéo institutionnelle HEST",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    const play = () => {
      el.play()
        .then(() => setStatus("ready"))
        .catch(() => {
          /* Le bouton natif des contrôles permet de lancer la lecture. */
        });
    };
    if (el.readyState >= 2) play();
    el.addEventListener("canplay", play);
    el.addEventListener("loadeddata", play);
    return () => {
      el.removeEventListener("canplay", play);
      el.removeEventListener("loadeddata", play);
    };
  }, []);

  return (
    <>
      <video
        ref={ref}
        className={className}
        src="/hest-video.mp4"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        preload="auto"
        aria-label={label}
        onError={() => setStatus("error")}
        onPlaying={() => setStatus("ready")}
      />
      {status === "error" ? (
        <p className="mt-3 text-sm text-error">
          Impossible de lire la vidéo. Vérifiez que le fichier public/hest-video.mp4
          est bien accessible.
        </p>
      ) : null}
    </>
  );
}
