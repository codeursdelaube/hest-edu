import Image from "next/image";
import CTAButton from "./CTAButton";
import InstitutionalVideo from "./InstitutionalVideo";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export default function Hero({
  kicker,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  videoSrc,
  cta,
  secondaryCta,
}: Props) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      {videoSrc ? (
        <InstitutionalVideo
          className="absolute inset-0 h-full w-full object-cover"
          poster={imageSrc}
          label={imageAlt}
        />
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/75 to-primary/35" />
      <div className="relative wrap flex min-h-[88vh] flex-col justify-center py-24 text-white">
        {kicker ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] md:text-7xl">{title}</h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            {subtitle}
          </p>
        ) : null}
        {cta ? (
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href={cta.href}>{cta.label}</CTAButton>
            {secondaryCta ? (
              <CTAButton href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
