import React, { useState } from 'react';
import GearItem from './GearItem';
import UpgradeModal from './UpgradeModal';

const GearDisplay = ({
  upgradeItem,
  currentLevels,
  currentClass,
  successState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemType, setItemType] = useState('');
  return (
    <div className="gear-box">
      <div className="gear-box-weapon">
        <GearItem
          itemType={'weapon'}
          itemLevel={currentLevels[0].level}
          currentClass={currentClass}
          changeitemType={setItemType}
          openModal={setIsOpen}
        />
      </div>
      <div className="gear-box-accesories">
        {currentLevels.map((item) => {
          if (item.type === 'weapon') {
            return '';
          }
          return (
            <GearItem
              key={item.id}
              itemType={item.type}
              itemLevel={item.level}
              changeitemType={setItemType}
              openModal={setIsOpen}
            />
          );
        })}
      </div>
      <UpgradeModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        itemType={itemType}
        upgradeItemHandler={upgradeItem}
        currentLevels={currentLevels}
        currentClass={currentClass}
        successState={successState}
      />
    </div>
  );
};

export default GearDisplay;
