// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
// import Calculator from './components/Calculator';
import Routes from './components/navigation/Routes'


function App() {
  // const [value, setValue] = useState()

  return (
    <Container fluid className='App-container'>
      {/* <h1>First Home Helper - calculator</h1><hr/><br/>
      <Calculator /> */}
      <Routes />
    </Container>
  );
}

export default App;
