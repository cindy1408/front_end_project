import './App.css';
import PlantsContainer from './containers/PlantsContainer'
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plants" component={PlantsContainer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
