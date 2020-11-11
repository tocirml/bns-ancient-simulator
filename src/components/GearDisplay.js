import React, { useState } from 'react';
import GearItem from './GearItem';
import UpgradeModal from './UpgradeModal';

const GearDisplay = ({ upgradeItem, currentLevels, currentClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState('');
  return (
    <div className="gear-box">
      <div className="gear-box-weapon">
        <GearItem
          itemType={'weapon'}
          itemLevel={currentLevels[0].level}
          currentClass={currentClass}
          changeModalItem={setModalItem}
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
              changeModalItem={setModalItem}
              openModal={setIsOpen}
            />
          );
        })}
      </div>
      <UpgradeModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        modalItem={modalItem}
        upgradeItemHandler={upgradeItem}
        currentLevels={currentLevels}
      />
    </div>
  );
};

export default GearDisplay;
