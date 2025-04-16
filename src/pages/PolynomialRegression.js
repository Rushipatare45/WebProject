import React from 'react';
import './PolynomialRegression.css';

function PolynomialRegression() {
  return (
    <div className="regression-container">
      {/* Title for the page */}
      <h1 className="page-title">Polynomial Regression</h1>

      <div className="regression-section">
        <h3>📌 Definition</h3>
        <p>
          Polynomial Regression is a form of regression analysis in which the relationship between the independent variable and the dependent variable is modeled as an nth degree polynomial.
        </p>
      </div>

      <div className="regression-section">
        <h3>🎯 Key Points</h3>
        <ul>
          <li>Used when data has a curvilinear relationship.</li>
          <li><strong>Assumptions:</strong> Linearity of the predictors, no multicollinearity, and constant variance of errors.</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>⚠️ Equations</h3>
        <ul>
          <li><strong>Polynomial Regression:</strong> y = β₀ + β₁x + β₂x² + ... + βₙxⁿ + ϵ</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>📊 Evaluation Metrics</h3>
        <ul>
          <li>R², Adjusted R²</li>
          <li>MSE, RMSE</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>💡 Example</h3>
        <p>
          Suppose you are analyzing the relationship between the speed of a car (in km/h) and its fuel efficiency (km/l). 
          A linear model may not fit the data well if fuel efficiency peaks at a certain speed and decreases on either side. 
          Polynomial regression (e.g., quadratic) can model this curve.
        </p>
        <p><strong>Example Equation:</strong> FuelEfficiency = 5 + 0.1×Speed - 0.002×Speed²</p>
      </div>

      <div className="regression-section">
        <h3>📁 Applications</h3>
        <ul>
          <li>Modeling growth patterns, such as population growth or product demand over time.</li>
          <li>Predicting trends in financial markets or complex systems.</li>
        </ul>
      </div>
    </div>
  );
}

export default PolynomialRegression;
