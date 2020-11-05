import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
// import PageNotFound from './PageNotFound';
import { Switch, Route } from 'react-router-dom';
import BnsAncientSim from './BnsAncientSim';

const App = () => (
  <div className="App">
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={BnsAncientSim} />
        <Route component={BnsAncientSim} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
