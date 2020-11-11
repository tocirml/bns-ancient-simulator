const GearItem = ({
  itemType,
  itemLevel,
  changeModalItem,
  currentClass = '',
  openModal,
}) => {
  return (
    <div
      className="gear-box-item"
      onClick={() => {
        changeModalItem(itemType);
        openModal(true);
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
