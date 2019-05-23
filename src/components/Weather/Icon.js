import React from 'react';

const Icon = ({ iconId }) => (
  // <i className="weather-icon">
  //   <img src={`http://openweathermap.org/img/w/${iconId}.png`} />
  // </i>
  <i className={`owf owf-${iconId}`} />
);

export default Icon;
