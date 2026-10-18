export function Screenshot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-2xl border border-border-warm bg-surface shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" />
      </div>
      <figcaption className="text-sm text-subtle-warm">{caption}</figcaption>
    </figure>
  );
}
