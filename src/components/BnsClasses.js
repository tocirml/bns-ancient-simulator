import bnsClassList from './bnsClassList';

const BnsClasses = ({ currentClass, setCurrentClass }) => {
  const classSelectHandler = (bnsClass) => {
    setCurrentClass(bnsClass);
  };
  return (
    <div className="bns__classes">
      {bnsClassList.map((item) => {
        return (
          <div
            className={`bns__classes-item ${
              item.name === currentClass ? 'current-class' : ''
            }`}
            onClick={() => classSelectHandler(item.name)}
          >
            <img src={`/bnsClasses/${item.name}.png`} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default BnsClasses;
