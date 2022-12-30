import CardComponent from './components/card' // relative path
import './App.css';

function App() {
  return (
    <div className="App">
     <CardComponent imgURL="" text="first card" />
     <CardComponent imgURL="" text="second card" />
    </div>
  );
}

export default App;
