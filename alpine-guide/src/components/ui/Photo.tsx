export default function Photo({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img className={className} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
  );
}
