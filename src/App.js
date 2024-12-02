import './App.css';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import ContentNavController from './Components/ContentNavController/ContentNavController';
import { useState } from 'react';

function App() {

  const [navbarSelected, setNavbarSelected] = useState("01");

  return (
    <div className="App">
      <Container>
          <Navbar setNavbarSelected={setNavbarSelected} navbarSelected={navbarSelected} />
          <ContentNavController navbarSelected={navbarSelected} />
      </Container>
    </div>
  );
}

export default App;
