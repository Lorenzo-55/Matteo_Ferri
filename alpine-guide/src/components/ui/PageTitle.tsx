export default function PageTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="page-title wrap">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {description && <p className="lede">{description}</p>}
    </div>
  );
}
