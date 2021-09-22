import RegistraionForm from './components/RegistrationForm';
import './App.css';

const inputData = {
  name: 'Francis'
}

function App() {
  return (
    <div className="App">
      <RegistraionForm name={inputData.name} />
    </div>
  );
}

export default App;
