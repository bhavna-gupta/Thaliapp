import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import PageRoutes from './routes/PageRoutes/PageRoutes';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <PageRoutes  />
      <Footer />
    </div>
  );
}

export default App;