import Image from "next/image";

type Props = {
  title: string;
  breadcrumb: string;
};

export default function PageHero({ title, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Image
        src="/Hero.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-secondary/75" />
      <div className="relative wrap text-white">
        <p className="text-sm text-white/70">{breadcrumb}</p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
