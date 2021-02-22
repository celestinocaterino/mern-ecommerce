import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import {BrowserView,} from "react-device-detect";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App= () => {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/' component={CartScreen} />

        </Container>
      </main>
      <BrowserView>
        <Footer/>
      </BrowserView>
    </Router>
  );
};

export default App;
