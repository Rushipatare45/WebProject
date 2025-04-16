import React from 'react';
import './RidgeRegression.css';

function RidgeRegression() {
  return (
    <div className="regression-container">
      <h1 className="page-title">Ridge Regression</h1>

      <div className="regression-section">
        <h3>📌 Definition</h3>
        <p>
          Ridge Regression is a type of linear regression that includes an L2 regularization term. It helps to reduce model complexity and multicollinearity by penalizing large coefficients.
        </p>
      </div>

      <div className="regression-section">
        <h3>🎯 Key Points</h3>
        <ul>
          <li>Controls overfitting by shrinking coefficient values.</li>
          <li><strong>Regularization:</strong> Adds a penalty equal to the square of the magnitude of coefficients.</li>
          <li>Works well when features are highly correlated.</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>⚠️ Equation</h3>
        <ul>
          <li><strong>Ridge Loss:</strong> Loss = RSS + αΣβ<sub>j</sub><sup>2</sup></li>
          <li><strong>Where:</strong> RSS is Residual Sum of Squares, α is the regularization strength.</li>
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
          Imagine predicting house prices using many features like size, number of rooms, age, location, etc. If some features are correlated, Ridge Regression helps to keep coefficients small and stable.
        </p>
      </div>

      <div className="regression-section">
        <h3>📁 Applications</h3>
        <ul>
          <li>Financial modeling with multicollinearity.</li>
          <li>Predictive analytics where many features are present.</li>
          <li>Genetic data modeling with many correlated predictors.</li>
        </ul>
      </div>
    </div>
  );
}

export default RidgeRegression;
