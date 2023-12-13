import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// css
import './css/App.css';

// pages
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* routes */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/category/:id" component={CategoryPage} />
          <Route path="/article/:id" component={ArticlePage} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
