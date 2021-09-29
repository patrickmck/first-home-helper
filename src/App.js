// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Routes from './components/navigation/Routes'


function App() {
  // const [value, setValue] = useState()

  return (
    <Container fluid className='App-container'>
      <Routes />
    </Container>
  );
}

export default App;
