import './Star.scss'
interface StarProps {
  edges: number;
  size: number;
  is_round: boolean;
  color: string;
}
declare module 'react' {
  interface CSSProperties {
    '--star-color': string,
  }
}

const Star = ({ edges, size, is_round = true, color = 'gold' }: StarProps) => {
  const points: string[] = [];

  for (let i = 0; i < edges * 2; i++) {
    const angle = (i * Math.PI) / edges;
    const radius = i % 2 === 0 ? size : size/2;
    points.push(`${Math.cos(angle) * radius},${Math.sin(angle) * radius}`);
  }

  return (
    <div className='star' style={{ '--star-color': color }}>
      <svg viewBox={`-${size} -${size} ${size * 2} ${size * 2}`} width={size * 2} height={size * 2}>
        <polygon points={points.join(' ')} fill={color} stroke={color} strokeWidth={is_round ? size / 2 : '0.01px'} strokeLinejoin={is_round ? 'round' : 'miter'} strokeLinecap={is_round ? 'round' : 'butt'}
        />
      </svg>
    </div>
  );
};

export default Star;
