import React from 'react';

const MaterialDisplay = ({ gold, stones, trys }) => {
  return (
    <div className="bns__materials-display">
      <h2 className="bns__materials-display_h2">Materials wasted</h2>
      <div className="bns__materials-display_label gold">GOLD</div>
      <div className="bns__materials-display_result">{gold}</div>
      <div className="bns__materials-display_label fusion">FUSION STONES</div>
      <div className="bns__materials-display_result">{stones}</div>
      <div className="bns__materials-display_label trys">TRYS</div>
      <div className="bns__materials-display_result">{trys}</div>
    </div>
  );
};

export default MaterialDisplay;
