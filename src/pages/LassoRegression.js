import React from 'react';
import './LassoRegression.css';

function LassoRegression() {
  return (
    <div className="regression-container">
      <h1 className="page-title">Lasso Regression</h1>

      <div className="regression-section">
        <h3>📌 Definition</h3>
        <p>
          Lasso Regression (Least Absolute Shrinkage and Selection Operator) is a linear regression technique that adds L1 regularization. It helps in feature selection by shrinking less important feature coefficients to zero.
        </p>
      </div>

      <div className="regression-section">
        <h3>🎯 Key Points</h3>
        <ul>
          <li>Useful when we have a high number of features.</li>
          <li>Can reduce model complexity and prevent overfitting.</li>
          <li>Can eliminate irrelevant features automatically.</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>⚠️ Equations</h3>
        <ul>
          <li><strong>Lasso:</strong> minimize (Σ(yᵢ - ŷᵢ)² + λΣ|βⱼ|)</li>
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
          Predicting house prices using a large dataset where Lasso can automatically reduce unnecessary features like zip codes or very specific location variables.
        </p>
      </div>

      <div className="regression-section">
        <h3>📁 Applications</h3>
        <ul>
          <li>High-dimensional data analysis (e.g., genomics, text data).</li>
          <li>Feature selection in machine learning pipelines.</li>
        </ul>
      </div>
    </div>
  );
}

export default LassoRegression;
