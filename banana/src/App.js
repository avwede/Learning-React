import './App.css';
import Banana from './Banana';

const fullBackground = {
  backgroundColor: 'lightyellow',
  width: '100vw',
  height: '100vh',
}

function App() {
  return (
      <div style={fullBackground}> 
        <Banana />
      </div>
  );
}

export default App;
