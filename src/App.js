import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div className='main'>
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
