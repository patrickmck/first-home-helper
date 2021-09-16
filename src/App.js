import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalcForm from './components/CalcForm';


function App() {
  // const [value, setValue] = useState()

  return (
    <Container fluid className='App-container'>
      <h1>First Home Helper - calculator</h1><hr/><br/>
      <Row>
        <Col xs={4}>
        <CalcForm />
        </Col>
        <Col>
        {/* <CalcForm /> */}
        </Col>
      </Row>

    </Container>
  );
}

export default App;
