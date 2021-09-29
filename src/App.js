import './App.css';
import Navbar from './components/nav.js';
import PlantsContainer from './containers/PlantsContainer';

function App() {
  return (
    <div className="App">
      <PlantsContainer />
      <Navbar/>
      <section>
      <div className="Background">
        <div className="left">
          <h1>BUD.DY</h1>
          <p>—A short introduction to botony</p>
          </div>
        <div className="right">
          <div className="content">
            <p>Matching you with a best Bud</p>
            <a href="./quiz.js" className="btn">Take Quiz!</a>
          </div>
        </div>
      </div>
      </section>
      </div>
  );
}

export default App;
