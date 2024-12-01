import './App.css';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import ContentNavController from './Components/ContentNavController/ContentNavController';

function App() {
  return (
    <div className="App">
      <Container>
          <Navbar />
          <ContentNavController>

          </ContentNavController>
      </Container>
    </div>
  );
}

export default App;
