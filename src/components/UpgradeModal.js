import ReactDom from 'react-dom';
import naSuccessRates from './naSuccessRates';

const UpgradeModal = ({
  open,
  onClose,
  itemType,
  upgradeItemHandler,
  currentLevels,
  currentClass,
}) => {
  let weaponLevel = 0;
  let successChance = 100;
  console.log(itemType);
  if (open === false) return null;
  weaponLevel = currentLevels.find((item) => item.type === itemType).level;
  successChance = naSuccessRates[`level_${weaponLevel}`].rate;
  return ReactDom.createPortal(
    <>
      <div className="bns__overlay"></div>
      <div className="bns__upgradeModal glass">
        <div className="bns__upgradeModal-header">
          {`Equipment upgrade`}
          <button className="bns__upgradeModal-close" onClick={() => onClose()}>
            X
          </button>
        </div>
        <div className="bns__upgradeModal-content">
          <div className="bns__upgradeModal-content-items">
            <div className="bns__upgradeModal-content-item">
              <img
                src={
                  itemType === 'weapon'
                    ? `/bnsWeapons/${currentClass}.png`
                    : `/bnsItems/${itemType}.png`
                }
                alt={`${itemType} icon`}
                className="bns__upgradeModal-content-item-img"
              />
              <span className="bns__upgradeModal-content-item-label">{`+${weaponLevel}`}</span>
            </div>
            <div className="bns__upgradeModal-content-item arrow-right"></div>
            <div className="bns__upgradeModal-content-item">
              <img
                src={
                  itemType === 'weapon'
                    ? `/bnsWeapons/${currentClass}.png`
                    : `/bnsItems/${itemType}.png`
                }
                alt={`${itemType} icon`}
                className="bns__upgradeModal-content-item-img"
              />
              <span className="bns__upgradeModal-content-item-label">{`+${
                weaponLevel + 1
              }`}</span>
            </div>
          </div>
          <div className="bns__upgradeModal-content-info">
            {`Success chance: ${successChance}%`}
          </div>
          <button
            className="bns__upgradeModal-upgrade"
            onClick={() => {
              upgradeItemHandler(itemType);
            }}
          >
            Upgrade
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default UpgradeModal;
