import React from 'react';

// Using styles directly in the component to avoid file creation issues.
const starfieldStyles = `
  .starfield {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;
  }

  @keyframes sparkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
  }
`;

interface StarProps {
  size: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
}

const Star: React.FC<StarProps> = ({ size, left, top, animationDuration, animationDelay }) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: '#C0C0C0', // Silver
    borderRadius: '50%',
    left: `${left}%`,
    top: `${top}%`,
    animation: `sparkle ${animationDuration}s linear infinite`,
    animationDelay: `${animationDelay}s`,
  };
  return <div style={style} />;
};

const Starfield = () => {
  const stars = React.useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 150; i++) {
      starArray.push({
        size: Math.random() * 2 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 5 + 3,
        animationDelay: Math.random() * 5,
      });
    }
    return starArray;
  }, []);

  return (
    <>
      <style>{starfieldStyles}</style>
      <div className="starfield" aria-hidden="true">
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </div>
    </>
  );
};

export default Starfield; 