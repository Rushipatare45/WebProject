import React from 'react';
import './MultipleRegression.css';

function MultipleRegression() {
  return (
    <div className="regression-container">
      {/* Title for the page */}
      <h1 className="page-title">Multiple Regression</h1>

      <div className="regression-section">
        <h3>📌 Definition</h3>
        <p>
          Multiple Linear Regression is a statistical technique that models the relationship between a dependent variable and two or more independent variables by fitting a linear equation to observed data.
        </p>
      </div>

      <div className="regression-section">
        <h3>🎯 Key Points</h3>
        <ul>
          <li>Predicts numerical outcomes based on multiple predictors.</li>
          <li><strong>Assumptions:</strong> Linearity, independence, constant variance, normality, and no multicollinearity.</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>⚠️ Equations</h3>
        <ul>
          <li><strong>Multiple Linear:</strong> y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ϵ</li>
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
          Imagine you're predicting house prices. The price of a house can depend on factors like its size (in square feet), number of bedrooms, and age of the house.
        </p>
        <p><strong>Example Equation:</strong> HousePrice = 50,000 + 100×Size + 20,000×Bedrooms - 1,000×Age</p>
        <p>
          In this case:
          <ul>
            <li><strong>Size</strong> is the area in square feet</li>
            <li><strong>Bedrooms</strong> is the number of rooms</li>
            <li><strong>Age</strong> is how old the house is (in years)</li>
          </ul>
        </p>
      </div>

      <div className="regression-section">
        <h3>📁 Applications</h3>
        <ul>
          <li>Predicting house prices based on features like size, location, number of rooms.</li>
          <li>Forecasting sales using advertising budgets, seasons, and product categories.</li>
        </ul>
      </div>
    </div>
  );
}

export default MultipleRegression;
