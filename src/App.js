import React from 'react';
import Nav from './Nav';
import Container from './components/card/CardCont'
import Cards from './components/card/Cards';


function App() {

  return (
    <>
      <Nav />
      <Container>
        <Cards />
      </Container>
    </>
  );
}

export default App;
