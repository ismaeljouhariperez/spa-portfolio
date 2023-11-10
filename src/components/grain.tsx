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
            />
          </filter>
  
          <rect
            // width="100vw" 
            // height="200vh" 
            filter="url(#noiseFilter)" 
          />
        </svg>
    );
  };
  
  export default GrainBackground;
  