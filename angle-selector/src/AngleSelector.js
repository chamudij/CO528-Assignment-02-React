import React, { useState } from 'react';
import './styles/AngleSelector.css';

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) {
      value = 0;
    } else if (value > 360) {
      value = 360;
    }
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  return (
    <div className="container">
      <h2>Angle Selector</h2>
      <input
        type="number"
        value={angle}
        onChange={handleInputChange}
        min="0"
        max="360"
      />

      <div className="slider-container">
        <input
          type="range"
          value={angle}
          onChange={handleSliderChange}
          min="0"
          max="360"
        />
      </div>

      <div className="radio-buttons">
        {[0, 45, 60, 90, 180].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="angleRadios"
              value={value}
              checked={angle === value}
              onChange={handleRadioChange}
            />
            {value}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
