import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

interface Rating {
  name: string;
  value: number;
}

interface Ratings {
  top: Rating;
  right: Rating;
  bottom: Rating;
  left: Rating;
}

interface Point {
  x: number;
  y: number;
}

const InteractiveChart: React.FC = () => {
  const [title, setTitle] = useState<string>("Capstone Project");
  const [ratings, setRatings] = useState<Ratings>({
    top: { name: "Technical Depth", value: 4 },
    right: { name: "Innovation", value: 3 },
    bottom: { name: "Usability", value: 5 },
    left: { name: "Efficiency", value: 1 }
  });

  const size = 700;
  const center = size / 2;
  const maxRating = 5;
  
  const getColor = (rating: number): string => {
    if (rating === 1) return '#ff0000';
    if (rating === 2) return '#ff7f00';
    if (rating === 3) return '#ffff00';
    if (rating === 4) return '#90ee90';
    if (rating === 5) return '#00ff00';
    
    const floor = Math.floor(rating);
    const ceil = Math.ceil(rating);
    const fraction = rating - floor;
    
    const startColor = getColor(floor);
    const endColor = getColor(ceil);
    
    const r1 = parseInt(startColor.slice(1,3), 16);
    const g1 = parseInt(startColor.slice(3,5), 16);
    const b1 = parseInt(startColor.slice(5,7), 16);
    
    const r2 = parseInt(endColor.slice(1,3), 16);
    const g2 = parseInt(endColor.slice(3,5), 16);
    const b2 = parseInt(endColor.slice(5,7), 16);
    
    const r = Math.round(r1 * (1 - fraction) + r2 * fraction);
    const g = Math.round(g1 * (1 - fraction) + g2 * fraction);
    const b = Math.round(b1 * (1 - fraction) + b2 * fraction);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getPoint = (angle: number, rating: number): Point => {
    const distance = (rating / maxRating) * (size * 0.35);
    const x = center + distance * Math.cos(angle);
    const y = center + distance * Math.sin(angle);
    return { x, y };
  };

  const topPoint = getPoint(-Math.PI/2, ratings.top.value);
  const rightPoint = getPoint(0, ratings.right.value);
  const bottomPoint = getPoint(Math.PI/2, ratings.bottom.value);
  const leftPoint = getPoint(Math.PI, ratings.left.value);

  const getGridPoints = (level: number): Point[] => {
    const angles = [-Math.PI/2, 0, Math.PI/2, Math.PI];
    return angles.map(angle => getPoint(angle, level));
  };

  const handleRatingChange = (
    position: keyof Ratings, 
    field: keyof Rating, 
    value: string | number
  ): void => {
    setRatings(prev => ({
      ...prev,
      [position]: {
        ...prev[position],
        [field]: field === 'value' ? Number(value) : value
      }
    }));
  };

  return (
    <div className="flex flex-row gap-8 w-full max-w-7xl mx-auto bg-black p-8 rounded-lg min-h-[800px]">
      {/* Left side - Controls */}
      <div className="flex flex-col gap-8 w-1/3 pl-8">
        <div className="flex flex-col gap-8 mt-20">
          {/* Title input */}
          <div className="flex items-center">
            <label className="text-white text-lg min-w-[80px] pt-1">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-[200px] px-3 py-1 bg-white text-black rounded h-8"
            />
          </div>
        </div>
        
        {/* Rating controls */}
        {(Object.entries(ratings) as [keyof Ratings, Rating][]).map(([position, rating]) => (
          <div key={position} className="flex items-center gap-2">
            <label className="text-white text-lg min-w-[80px]">{position}:</label>
            <input
              type="text"
              value={rating.name}
              onChange={(e) => handleRatingChange(position, 'name', e.target.value)}
              className="w-[200px] px-3 py-1 bg-white text-black rounded h-8"
            />
            <div className="flex items-center ml-8">
              <input
                type="range"
                min="1"
                max="5"
                value={rating.value}
                onChange={(e) => handleRatingChange(position, 'value', e.target.value)}
                style={{ width: '300px' }}
              />
              <span className="text-white min-w-[20px] text-center ml-2">{rating.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Chart */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white text-center mb-8">{title}</h1>
        
        <div className="relative">
          <svg 
            viewBox={`0 0 ${size} ${size}`} 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient 
                id="webGradient" 
                cx={center} 
                cy={center} 
                r={size * 0.35} 
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ff0000" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ffff00" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00ff00" stopOpacity="0.7" />
              </radialGradient>
            </defs>

            {[1, 2, 3, 4, 5].reverse().map((level) => {
              const points = getGridPoints(level);
              return (
                <polygon
                  key={level}
                  points={points.map(p => `${p.x},${p.y}`).join(' ')}
                  fill={getColor(level)}
                  fillOpacity="0.1"
                  stroke={getColor(level)}
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              );
            })}

            <polygon
              points={`
                ${topPoint.x},${topPoint.y} 
                ${rightPoint.x},${rightPoint.y} 
                ${bottomPoint.x},${bottomPoint.y} 
                ${leftPoint.x},${leftPoint.y}
              `}
              fill="url(#webGradient)"
              stroke="white"
              strokeWidth="2"
            />

            {/* Points */}
            {[
              { point: topPoint, rating: ratings.top },
              { point: rightPoint, rating: ratings.right },
              { point: bottomPoint, rating: ratings.bottom },
              { point: leftPoint, rating: ratings.left }
            ].map((data, index) => (
              <circle
                key={index}
                cx={data.point.x}
                cy={data.point.y}
                r={6}
                fill={getColor(data.rating.value)}
                stroke="white"
                strokeWidth="2"
              />
            ))}

            {/* Labels */}
            {[
              { x: center, y: 90, anchor: "middle" as const, rating: ratings.top },
              { x: size - 30, y: center, anchor: "end" as const, rating: ratings.right },
              { x: center, y: size - 70, anchor: "middle" as const, rating: ratings.bottom },
              { x: 30, y: center, anchor: "start" as const, rating: ratings.left }
            ].map((label, i) => (
              <g key={i}>
                <text 
                  x={label.x} 
                  y={label.y} 
                  textAnchor={label.anchor}
                  fill="#fff"
                  className="text-sm"
                >
                  {label.rating.name} ({label.rating.value})
                </text>
              </g>
            ))}

            {/* Legend */}
            <g transform={`translate(${size - 200}, ${size - 100})`}>
              {[1, 3, 5].map((rating, i) => (
                <g key={rating} transform={`translate(0, ${i * 25})`}>
                  <rect 
                    width={30} 
                    height={15} 
                    fill={getColor(rating)} 
                    stroke="white"
                    strokeWidth={1}
                  />
                  <text x={40} y={12} fill="#fff" className="text-xs">
                    Level {rating} - {rating === 1 ? 'Poor' : rating === 3 ? 'Average' : 'Excellent'}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Mount the component
const container = document.getElementById('rating-chart-root');
if (container) {
  const root = createRoot(container);
  root.render(<InteractiveChart />);
}

export default InteractiveChart;