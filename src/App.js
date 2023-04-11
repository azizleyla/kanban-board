import logo from './logo.svg';
import './App.css';
import { Cards } from './components/Cards/Cards';

function App() {
  return (
    <div className="bg-hero-pattern bg-cover w-full h-[100vh] container mx-auto">
      <Cards />
    </div>
  );
}

export default App;
