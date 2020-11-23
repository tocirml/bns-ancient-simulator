import React, { useState, useEffect } from 'react';
import MainDisplay from './MainDisplay';
import MaterialDisplay from './MaterialDisplay';
import BnsClasses from './BnsClasses';
import naSuccessRates from '../data/naSuccessRates';
import upgradeableItems from '../data/upgradeableItems';
import materialsData from '../data/wastedMaterials';
import Switch from '@material-ui/core/Switch';
import premiumIcon from '../assets/img/premium-icon.png';
import '../styles/BnsAncientSim.scss';
import ReactGa from 'react-ga';

const BnsAncientSim = () => {
  useEffect(() => {
    ReactGa.initialize('G-GM9MTD5LQ7');
  }, []);

  const [wastedMaterials, setWastedMaterials] = useState(
    localStorage.getItem('materials')
      ? JSON.parse(localStorage.getItem('materials'))
      : materialsData
  );

  const [currentLevels, setCurrentLevels] = useState(
    localStorage.getItem('levels')
      ? JSON.parse(localStorage.getItem('levels'))
      : [...upgradeableItems]
  );

  const [currentClass, setCurrentClass] = useState(
    localStorage.getItem('bnsClass')
      ? localStorage.getItem('bnsClass')
      : 'blademaster'
  );

  const [isPremium, setIsPremium] = useState(
    localStorage.getItem('isPremium') != null
      ? JSON.parse(localStorage.getItem('isPremium'))
      : false
  );

  const [successState, setSuccessState] = useState('none');

  useEffect(() => {
    localStorage.setItem('materials', JSON.stringify(wastedMaterials));
  }, [wastedMaterials]);

  useEffect(() => {
    localStorage.setItem('levels', JSON.stringify(currentLevels));
  }, [currentLevels]);

  useEffect(() => {
    localStorage.setItem('bnsClass', currentClass);
  }, [currentClass]);

  useEffect(() => {
    localStorage.setItem('isPremium', isPremium);
  }, [isPremium]);

  const reset = () => {
    setCurrentLevels(
      currentLevels.map((item) => {
        return { ...item, level: 0, maxLevelObtained: 0 };
      })
    );

    setWastedMaterials(materialsData);
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

  const updateSpentMaterials = (
    gold = 0,
    fusionStones = 0,
    tStones = 0,
    pTStones = 0
  ) => {
    if (isPremium) gold *= 0.95;
    setWastedMaterials({
      gold: wastedMaterials.gold + gold,
      fusionStones: wastedMaterials.fusionStones + fusionStones,
      tStones: wastedMaterials.tStones + tStones,
      ptStones: wastedMaterials.ptStones + pTStones,
      tries: wastedMaterials.tries + 1,
    });
  };

  const upgradeItem = (itemType) => {
    let gear = currentLevels.find((item) => item.type === itemType),
      levelInfo = naSuccessRates[`level_${gear.level}`];

    updateSpentMaterials(
      gear.level === 0 ? levelInfo.gold + 50 : levelInfo.gold,
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
        <MaterialDisplay wastedMaterials={wastedMaterials} />
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
