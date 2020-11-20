import bnsClassList from '../data/bnsClassList';
import Carousel from 'react-elastic-carousel';

const BnsClasses = ({ currentClass, setCurrentClass }) => {
  const classSelectHandler = (bnsClass) => {
    setCurrentClass(bnsClass);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 300, itemsToShow: 7 },
    { width: 650, itemsToShow: 13 },
  ];
  return (
    <div className="bns__classes">
      <Carousel breakPoints={breakPoints}>
        {bnsClassList.map((item) => {
          return (
            <div
              key={Math.random() * 10000}
              className={`bns__classes-item ${
                item.name === currentClass ? 'current-class' : ''
              }`}
              onClick={() => classSelectHandler(item.name)}
            >
              <img src={`/bnsClasses/${item.name}.png`} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BnsClasses;
