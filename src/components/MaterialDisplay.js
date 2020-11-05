import React from 'react';

const MaterialDisplay = ({ gold, stones, trys }) => {
  return (
    <div className="bns__materials-display">
      <h2 className="bns__materials-display_h2">Materials used</h2>
      <label htmlFor="" className="bns_materials-display_label">
        GOLD:
        {' ' + gold}
      </label>
      <label htmlFor="" className="bns_materials-display_label">
        FUSION STONES:
        {' ' + stones}
      </label>
      <label htmlFor="" className="bns_materials-display_label">
        NUMBER OF TRYS:
        {' ' + trys}
      </label>
    </div>
  );
};

export default MaterialDisplay;
