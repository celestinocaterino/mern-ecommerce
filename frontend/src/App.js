import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
const App= () => {
  return (
    <>
   
      <Header/>
      <main>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer/>
   
    
    </>
  );
}

export default App;
