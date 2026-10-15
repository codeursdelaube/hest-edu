"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

const emptySubscribe = () => () => {};

export default function TypewriterText({
  words,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 2200,
  className = "",
  cursorClassName = "",
}: TypewriterTextProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isMounted || words.length === 0) return;

    const fullWord = words[wordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Écriture du mot lettre par lettre
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Mot complètement écrit : pause avant suppression
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Effacement du mot
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Mot complètement effacé : passer au mot suivant avec délai
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, isMounted]);

  // Si pas encore monté côté client (SSR), afficher le premier mot complet pour le SEO
  if (!isMounted) {
    return (
      <span className={className}>
        {words[0]}
        <span className={`inline-block font-normal animate-pulse text-accent ${cursorClassName}`}>|</span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span>{currentText}</span>
      <span
        aria-hidden="true"
        className={`inline-block font-light text-accent ml-1 animate-[blink_0.9s_infinite] ${cursorClassName}`}
      >
        |
      </span>
    </span>
  );
}
