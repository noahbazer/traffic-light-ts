import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [activeLight, setActiveLight] = useState<'red' | 'green' | 'yellow'>(
    'red'
  );

  const changeLight = () => {
    let nextLight: 'red' | 'green' | 'yellow';
    switch (activeLight) {
      case 'red':
        nextLight = 'green';
        break;
      case 'green':
        nextLight = 'yellow';
        break;
      case 'yellow':
      default:
        nextLight = 'red';
        break;
    }
    setActiveLight(nextLight);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${activeLight === 'red' ? 'red' : 'black'}`}
        ></div>
        <div
          className={`circle ${activeLight === 'yellow' ? 'yellow' : 'black'}`}
        ></div>
        <div
          className={`circle ${activeLight === 'green' ? 'green' : 'black'}`}
        ></div>
      </div>
      <button
        className="next-state-button"
        onClick={changeLight}
      >
        Next State
      </button>
    </div>
  );
};
