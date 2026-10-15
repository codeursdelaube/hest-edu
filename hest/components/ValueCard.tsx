import { Compass, Scale, Sparkles } from "lucide-react";

const icons = [Scale, Compass, Sparkles];

type Props = {
  title: string;
  description: string;
  index: number;
};

export default function ValueCard({ title, description, index }: Props) {
  const Icon = icons[index] ?? Compass;

  return (
    <article className="flex gap-4 border-r border-base-300 px-6 py-8 first:pl-8 last:border-r-0 last:pr-8 max-md:border-r-0 max-md:border-b max-md:last:border-b-0">
      <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-primary/10 text-primary">
        <Icon className="size-6" aria-hidden />
      </span>
      <div>
        <h3 className="font-serif text-xl text-secondary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral/80">{description}</p>
      </div>
    </article>
  );
}
