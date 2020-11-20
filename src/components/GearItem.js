import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import GearTooltip from './GearTooltip';

const GearItem = ({
  itemType,
  itemLevel,
  changeitemType,
  currentClass = '',
  openModal,
}) => {
  return (
    <div
      className="gear-box-item"
      onClick={() => {
        changeitemType(itemType);
        openModal(true);
      }}
    >
      <Tippy
        content={
          <GearTooltip
            itemType={itemType}
            itemLevel={itemLevel}
            currentClass={currentClass}
          ></GearTooltip>
        }
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
      </Tippy>
      <span className="gear-box-item-level">{`+${itemLevel}`}</span>
    </div>
  );
};

export default GearItem;
