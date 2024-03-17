import React from 'react';

const Box = ({ width, height, margin, marginTop, border, borderRadius, textAlign, padding, children , color}) => {
  const boxStyle = {
    width: width || '800px',
    height: height || '500px',
    margin: margin || 'auto',
    marginTop: marginTop || '50px',
    border: border || '1px solid #ccc',
    borderRadius: borderRadius || '5px',
    textAlign: textAlign || 'left',
    padding: padding || '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    overflowY: 'auto',
    color: '#000'
  };

  return (
    <div style={boxStyle}>
      {children}
    </div>
  );
};

export default Box;
