import Nav from './Nav';
import '../styles/Header.scss';

const Header = () => (
  <header className="header">
    <img src="bnsicon.png" alt="logo" className="logo" />
    <div className="header-title">{`BnS Ancient Simulator`}</div>
    <Nav />
  </header>
);

export default Header;
