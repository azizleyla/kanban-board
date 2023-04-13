import logo from './logo.svg';
import './App.css';
import { Cards } from './components/Cards/Cards';



function App() {
  return (
    <div className="bg-hero-pattern bg-cover w-full h-[100vh] ">
      <div className='container mx-auto pt-5'>
      <Cards />
      </div>
    </div>
  );
}

export default App;
