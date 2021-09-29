import './App.css';
import PlantsContainer from './containers/PlantsContainer'
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import QuizContainer from './containers/QuizContainer';
import StartQuiz from './components/StartQuiz';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plants" component={PlantsContainer} />
        <Route path="/quiz" component={QuizContainer} />
        <Route path="/start" component={StartQuiz} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
