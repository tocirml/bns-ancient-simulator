import ReactDom from 'react-dom';
import naSuccessRates from '../data/naSuccessRates';
import goldIcon from '../assets/img/gold-icon.png';
import fusionStoneIcon from '../assets/img/fusion-stone-icon.png';
import transformationStoneIcon from '../assets/img/transformation-stone-icon.png';

const UpgradeModal = ({
  open,
  onClose,
  itemType,
  upgradeItemHandler,
  currentLevels,
  currentClass,
  successState,
  isPremium,
}) => {
  let gearItem, upgradeInfo;

  if (open === false) return null;

  gearItem = currentLevels.find((item) => item.type === itemType);
  upgradeInfo = naSuccessRates[`level_${gearItem.level}`];

  return ReactDom.createPortal(
    <>
      <div className="bns__overlay" onClick={() => onClose()}></div>
      <div className="bns__upgradeModal glass">
        <div className="bns__upgradeModal-header">
          {`Equipment upgrade`}
          <button
            className="bns__upgradeModal-close bttn-close"
            onClick={() => onClose()}
          >
            x
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
              <span className="bns__upgradeModal-content-item-label">{`+${gearItem.level}`}</span>
            </div>
            {gearItem.level === 20 ? (
              ''
            ) : (
              <>
                <div className="bns__upgradeModal-content-item arrow-right"></div>
              </>
            )}
            {gearItem.level === 20 ? (
              ''
            ) : (
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
                  gearItem.level + 1
                }`}</span>
              </div>
            )}
          </div>
          <div className="bns__upgradeModal-content-item-max">{`Max obtained: lv${gearItem.maxLevelObtained}`}</div>
          {successState === 'none' ? (
            ''
          ) : (
            <div className="bns__upgradeModal-content-message hide-container">
              <img
                className="hideMe"
                src={`pepe${successState === 'success' ? 'ga' : 'shock'}.png`}
                alt="pepe"
              />
            </div>
          )}
          {gearItem.level === 20 ? (
            ''
          ) : (
            <div className="bns__upgradeModal-content-info">
              <div className="bns__upgradeModal-content-info-gold">{`Fusion stone cost: ${
                gearItem.level === 0 ? '50' : gearItem.fusionCost
              }`}</div>
              <div className="bns__upgradeModal-content-info-gold">
                {`Basic cost: ${
                  isPremium ? upgradeInfo.gold * 0.95 : upgradeInfo.gold
                }`}
                <img src={goldIcon} alt="gold icon" className="gold-icon" />
              </div>
              <div className="bns__upgradeModal-content-info-rate">{`Success chance: ${upgradeInfo.rate}%`}</div>
            </div>
          )}

          <button
            className={`bns__upgradeModal-upgrade btn111 ${
              gearItem.level === 20 ? 'btn222' : ''
            }`}
            onClick={() => {
              if (gearItem.level < 20) upgradeItemHandler(itemType);
            }}
          >
            {`Upgrade`}
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default UpgradeModal;
