import React from 'react';
// import ClassImage from './ClassImage';
import GearDisplay from './GearDisplay';
// import naSuccessRates from './naSuccessRates';

const MainDisplay = ({
  upgradeItem,
  currentLevels,
  currentClass,
  successState,
}) => {
  return (
    <div className="bns__main-display">
      {/* <ClassImage /> */}
      <GearDisplay
        upgradeItem={upgradeItem}
        currentLevels={currentLevels}
        currentClass={currentClass}
        successState={successState}
      />
    </div>
  );
};

export default MainDisplay;
