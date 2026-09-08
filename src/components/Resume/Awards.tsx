import type { Award as AwardType } from '@/data/resume/awards';

import Award from './Awards/Award';

interface AwardsProps {
  data: AwardType[];
}

export default function Awards({ data }: AwardsProps) {
  return (
    <div className="awards">
      <div className="title">
        <h2>Awards</h2>
      </div>
      {data.map((award) => (
        <Award data={award} key={`${award.title}-${award.issuer}`} />
      ))}
    </div>
  );
}
