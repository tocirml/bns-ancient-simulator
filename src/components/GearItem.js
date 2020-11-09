const GearItem = ({ itemType, itemLevel, upgradeItem, currentClass = '' }) => {
  return (
    <div
      className="gear-box-item"
      onClick={() => {
        upgradeItem(itemType);
      }}
    >
      <img
        src={
          itemType === 'weapon'
            ? `/bnsWeapons/${currentClass}.png`
            : `/bnsItems/${itemType}.png`
        }
        alt={`${itemType} icon`}
        className="gear-box-item-img"
      />
      <span className="gear-box-item-level">{`+${itemLevel}`}</span>
    </div>
  );
};

export default GearItem;
