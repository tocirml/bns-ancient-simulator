import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import MaterialDisplay from './MaterialDisplay';
import BnsClasses from './BnsClasses';
import naSuccessRates from '../data/naSuccessRates';
import upgradeableItems from '../data/upgradeableItems';
import Switch from '@material-ui/core/Switch';
import premiumIcon from '../assets/img/premium-icon.png';
import '../styles/BnsAncientSim.scss';

const BnsAncientSim = () => {
  const [spentGold, setSpentGold] = useState(0);
  const [spentTStones, setSpentTStones] = useState(0);
  const [spentPTStones, setSpentPTStones] = useState(0);
  const [spentFusionStones, setSpentFusionStones] = useState(0);
  const [attemps, setAttemps] = useState(0);
  const [currentLevels, setCurrentLevels] = useState([...upgradeableItems]);
  const [currentClass, setCurrentClass] = useState('blademaster');
  const [successState, setSuccessState] = useState('none');
  const [isPremium, setIsPremium] = useState(false);

  const reset = () => {
    setCurrentLevels(
      currentLevels.map((item) => {
        return { ...item, level: 0, maxLevelObtained: 0 };
      })
    );
    setAttemps(0);
    setSpentGold(0);
    setSpentTStones(0);
    setSpentPTStones(0);
    setSpentFusionStones(0);
  };

  const changeSuccessState = (state) => {
    setSuccessState(state);
    setTimeout(() => setSuccessState('none'), 1000);
  };

  const succeded = (level) => {
    let successChance = naSuccessRates[`level_${level}`].rate,
      roll = Math.random() * 100;
    if (roll < successChance) {
      changeSuccessState('success');
      return 'success';
    }
    changeSuccessState('fail');
    return 'fail';
  };

  const updateSpentMaterials = (gold, fusionStones, tStones, pTStones) => {
    if (isPremium) gold *= 0.95;
    setAttemps(attemps + 1);
    setSpentGold(spentGold + gold);
    setSpentTStones(spentTStones + tStones);
    setSpentPTStones(spentPTStones + pTStones);
    setSpentFusionStones(spentFusionStones + fusionStones);
  };

  const upgradeItem = (itemType) => {
    let gear = currentLevels.find((item) => item.type === itemType),
      levelInfo = naSuccessRates[`level_${gear.level}`];

    updateSpentMaterials(
      levelInfo.gold,
      gear.level === 0 ? 50 : gear.fusionCost,
      gear.level === 0 ? 5 : gear.tStoneCost,
      gear.level === 0 ? 5 : 0
    );

    if (succeded(gear.level) === 'success') {
      gear.level += 1;
    } else {
      gear.level = levelInfo.fail;
    }

    setCurrentLevels(
      currentLevels.map((item) => {
        if (item.type === itemType) {
          return {
            ...item,
            level: gear.level,
            maxLevelObtained:
              gear.level > gear.maxLevelObtained
                ? gear.level
                : gear.maxLevelObtained,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="bns__container">
      <h1>Blade & Soul Ancient System Simulator</h1>
      <p>Test your determination and wallet!</p>
      <div className="bns__premium">
        <label>
          {'Premium '}
          <img className="bns__icon" alt="premium icon" src={premiumIcon} />
        </label>
        <Switch
          checked={isPremium}
          color="primary"
          onChange={() => {
            setIsPremium(!isPremium);
          }}
        />
      </div>
      <BnsClasses
        currentClass={currentClass}
        setCurrentClass={setCurrentClass}
      />
      <div className="bns__container_displays">
        <MaterialDisplay
          gold={spentGold}
          stones={spentFusionStones}
          tstones={spentTStones}
          ptstones={spentPTStones}
          trys={attemps}
        />
        <MainDisplay
          upgradeItem={upgradeItem}
          currentLevels={currentLevels}
          currentClass={currentClass}
          successState={successState}
          isPremium={isPremium}
        />
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset All
      </button>
    </div>
  );
};

export default BnsAncientSim;
