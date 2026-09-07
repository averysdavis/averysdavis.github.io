import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h3 className="degree">{data.degree}</h3>
        <p className="school">
          <a href={data.link}>{data.school}</a>,{' '}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
      {data.coursework && data.coursework.length > 0 && (
        <p className="degree-coursework">
          <span className="degree-coursework-label">Relevant coursework:</span>{' '}
          {data.coursework.join(', ')}
        </p>
      )}
    </article>
  );
}
