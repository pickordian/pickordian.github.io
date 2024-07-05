interface StarProps {
  edges: number;
  innerR: number;
  outerR: number;
  size: number;
  isRound: boolean;
}

const Star = ({ edges, innerR, outerR, size, isRound }: StarProps) => {
  const points: string[] = [];

  for (let i = 0; i < edges * 2; i++) {
    const angle = (i * Math.PI) / edges;
    const radius = i % 2 === 0 ? outerR : innerR;
    points.push(`${Math.cos(angle) * radius},${Math.sin(angle) * radius}`);
  }

  return (
    <svg viewBox="-100 -100 200 200" width={`${size}`} height={`${size}`}>
      <polygon points={points.join(' ')} fill="gold" stroke="gold" strokeWidth={`${innerR/2}`} strokeLinejoin={isRound? 'round' : 'miter'} strokeLinecap={isRound? 'round' : 'butt'}
      /> 
    </svg>
  );
};

export default Star;
