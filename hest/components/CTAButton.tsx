import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "accent";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-content hover:bg-primary/90"
      : variant === "accent"
        ? "bg-accent text-accent-content hover:bg-accent/90"
        : "border border-white/70 bg-transparent text-white hover:bg-white hover:text-secondary";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
