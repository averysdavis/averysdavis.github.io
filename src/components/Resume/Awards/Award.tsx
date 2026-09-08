import type { Award as AwardType } from '@/data/resume/awards';

interface AwardProps {
  data: AwardType;
}

export default function Award({ data }: AwardProps) {
  return (
    <article className="award-container">
      <header>
        <h3 className="award-title">{data.title}</h3>
        <p className="award-issuer">
          {data.issuer}, <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
      {data.description && (
        <p className="award-description">{data.description}</p>
      )}
    </article>
  );
}
