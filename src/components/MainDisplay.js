import React from 'react';
// import ClassImage from './ClassImage';
import GearDisplay from './GearDisplay';
// import naSuccessRates from './naSuccessRates';

const MainDisplay = ({
  upgradeItem,
  currentLevels,
  currentClass,
  successState,
  isPremium,
}) => {
  return (
    <div className="bns__main-display">
      {/* <ClassImage /> */}
      <GearDisplay
        upgradeItem={upgradeItem}
        currentLevels={currentLevels}
        currentClass={currentClass}
        successState={successState}
        isPremium={isPremium}
      />
    </div>
  );
};

export default MainDisplay;
