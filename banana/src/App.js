import './App.css';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Banana from './Banana';
import Character from './Character';

const fullBackground = {
  width: '100vw',
  height: '100vh',
}

function App() {
  return (
    <div style={fullBackground}> 
      <Router>
        <Route exact path = "/Banana" component={Banana} />
        <Route exact path = "/Character" component={Character} />
      </Router>
    </div>
  );
}

export default App;
