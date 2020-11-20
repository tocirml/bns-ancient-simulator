const GearTooltip = ({ itemType, itemLevel, currentClass }) => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="gear-tooltip">
      <img
        src={
          itemType === 'weapon'
            ? `/bnsWeapons/${currentClass}.png`
            : `/bnsItems/${itemType}.png`
        }
        alt={`${itemType} icon`}
        className="gear-box-item-img"
      />
      {capitalize(itemType)}
      {`  Lv: ${itemLevel}`}
    </div>
  );
};

export default GearTooltip;
