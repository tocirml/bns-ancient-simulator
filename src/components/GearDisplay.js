import GearItem from './GearItem';

const GearDisplay = ({ upgradeItem, currentLevels }) => {
  return (
    <div className="gear-box">
      <div className="gear-box-weapon">
        <GearItem
          itemType={'weapon'}
          itemLevel={currentLevels[0].level}
          upgradeItem={upgradeItem}
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
              upgradeItem={upgradeItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GearDisplay;
