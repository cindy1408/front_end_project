import './App.css';
import PlantsContainer from './containers/PlantsContainer'
import Home from './components/Home';
import HomeContainer from './containers/HomeContainer'
import { Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import QuizContainer from './containers/QuizContainer';
import StartQuiz from './components/StartQuiz';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/start" component={StartQuiz} />
        <Route path="/quiz" component={QuizContainer} />
        <Route path="/plants" component={PlantsContainer} />
        <Route path="/results" component={Results} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
