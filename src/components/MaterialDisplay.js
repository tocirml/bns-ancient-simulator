import React from 'react';
import goldIcon from '../assets/img/gold-icon.png';
import clickIcon from '../assets/img/click-icon.png';
import fusionStoneIcon from '../assets/img/fusion-stone-icon.png';
import transformationStoneIcon from '../assets/img/transformation-stone-icon.png';
import pTransformationStoneIcon from '../assets/img/premium-transformation-stone-icon.png';

const MaterialDisplay = ({
  wastedMaterials,
  gold,
  stones,
  trys,
  tstones,
  ptstones,
}) => {
  return (
    <div className="bns__materials-display">
      <h2 className="bns__materials-display_h2">Materials wasted</h2>
      <div className="bns__materials-display_label gold">
        <img className="bns__icon-small" alt="premium icon" src={goldIcon} />
      </div>
      <div className="bns__materials-display_result">
        {wastedMaterials.gold}
      </div>
      <div className="bns__materials-display_label fusion">
        <img
          className="bns__icon-small"
          alt="premium icon"
          src={fusionStoneIcon}
        />
      </div>
      <div className="bns__materials-display_result">
        {wastedMaterials.fusionStones}
      </div>
      <div className="bns__materials-display_label gold">
        <img
          className="bns__icon-small"
          alt="premium icon"
          src={transformationStoneIcon}
        />
      </div>
      <div className="bns__materials-display_result">
        {wastedMaterials.tStones}
      </div>
      <div className="bns__materials-display_label gold">
        <img
          className="bns__icon-small"
          alt="premium icon"
          src={pTransformationStoneIcon}
        />
      </div>
      <div className="bns__materials-display_result">
        {wastedMaterials.ptStones}
      </div>
      <div className="bns__materials-display_label trys">
        <img className="bns__icon-small" alt="premium icon" src={clickIcon} />
      </div>
      <div className="bns__materials-display_result">
        {wastedMaterials.tries}
      </div>
    </div>
  );
};

export default MaterialDisplay;
