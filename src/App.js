import './App.css';
import PlantsContainer from './containers/PlantsContainer'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import QuizContainer from './containers/QuizContainer';
import StartQuiz from './components/StartQuiz';
import Results from './components/Results';
import UserContainer from './containers/UserContainer';
import oldUser from './components/SignIn'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/start" component={StartQuiz} />
        <Route path="/quiz" component={QuizContainer} />
        <Route path="/plants" component={PlantsContainer} />
        <Route path="/results" component={Results} />
        <Route path="/register" component={UserContainer} />
        <Route path="/signin" component={oldUser} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
