import React from 'react';
// import ClassImage from './ClassImage';
import GearDisplay from './GearDisplay';
// import naSuccessRates from './naSuccessRates';

const MainDisplay = ({ upgradeItem, currentLevels, currentClass }) => {
  return (
    <div className="bns__main-display">
      {/* <ClassImage /> */}
      <GearDisplay
        upgradeItem={upgradeItem}
        currentLevels={currentLevels}
        currentClass={currentClass}
      />
    </div>
  );
};

export default MainDisplay;
