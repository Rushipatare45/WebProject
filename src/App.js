import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import LinearRegression from './pages/LinearRegression';
import MultipleRegression from './pages/MultipleRegression';
import PolynomialRegression from './pages/PolynomialRegression';
import LogisticRegression from './pages/LogisticRegression';
import RidgeRegression from './pages/RidgeRegression';
import LassoRegression from './pages/LassoRegression'; // ✅ Import LassoRegression

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Interactive Regression Learning Assistant</h1>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/linear-regression">Linear Regression</Link></li>
              <li><Link to="/multiple-regression">Multiple Regression</Link></li>
              <li><Link to="/polynomial-regression">Polynomial Regression</Link></li>
              <li><Link to="/logistic-regression">Logistic Regression</Link></li>
              <li><Link to="/ridge-regression">Ridge Regression</Link></li>
              <li><Link to="/lasso-regression">Lasso Regression</Link></li> {/* ✅ Lasso link */}
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/linear-regression" element={<LinearRegression />} />
            <Route path="/multiple-regression" element={<MultipleRegression />} />
            <Route path="/polynomial-regression" element={<PolynomialRegression />} />
            <Route path="/logistic-regression" element={<LogisticRegression />} />
            <Route path="/ridge-regression" element={<RidgeRegression />} />
            <Route path="/lasso-regression" element={<LassoRegression />} /> {/* ✅ Lasso route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to the Interactive Regression Learning Assistant</h2>
        <p>Learn about different regression models and how they are applied in real-world scenarios.</p>
        <div className="cta-buttons">
          <button className="cta-button">Get Started</button>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default App;
