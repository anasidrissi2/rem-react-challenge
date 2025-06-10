import './App.css';
import SkipSizeSelector from './components/SkipSizeSelector';
import StepSelector from './components/StepSelector';

function App() {
  return (
    <div className="bg-black min-h-screen text-white py-8">
      <StepSelector />
      <SkipSizeSelector />
    </div>
  );
}

export default App;
