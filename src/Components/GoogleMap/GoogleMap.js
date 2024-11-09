import React from 'react';

function MapComponent(props) {
  const { latitude, longitude } = props;
 
//   const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&markers=color:red%7Clabel:A%7C${latitude},${longitude}`;
const src = "https://maps.google.com/maps?q=30.68184,76.74528&output=embed";

  return (
    <div className="MapComponent">
      <iframe
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src={src}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}

export default MapComponent;