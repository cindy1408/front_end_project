import './App.css';
import Navbar from './home/components/nav.js';
import PlantsContainer from './containers/PlantsContainer';
import './home/home.css';

function App() {
  return (
    <div className="App">
      <PlantsContainer />
      <Navbar/>
      {/* <Div></Div>
      <Div></Div> */}
    </div>
  );
}

export default App;
