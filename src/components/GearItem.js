const GearItem = ({ itemType, itemLevel, upgradeItem }) => {
  return (
    <div
      className="gear-box-item"
      onClick={() => {
        upgradeItem(itemType);
      }}
    >
      <img
        src={`/bnsItems/${itemType}.png`}
        alt={`${itemType} icon`}
        className="gear-box-item-img"
      />
      <span className="gear-box-item-level">{`+${itemLevel}`}</span>
    </div>
  );
};

export default GearItem;
