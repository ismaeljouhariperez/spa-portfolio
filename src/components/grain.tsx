const GrainBackground: React.FC = () => {
    return (
        <svg 
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="grain-background"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        >
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="20" 
              numOctaves="3" 
              stitchTiles="nostitch" 
            />
          </filter>
  
          <rect
            width="100%" 
            height="100%" 
            filter="url(#noiseFilter)" 
          />
        </svg>
    );
  };
  
  export default GrainBackground;
  