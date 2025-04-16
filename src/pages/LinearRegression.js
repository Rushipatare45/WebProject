// src/pages/LinearRegression.js
import React from 'react';
import './LinearRegression.css';

function LinearRegression() {
  return (
    <div className="lr-container">
      <h2 className="lr-title">Linear Regression: Comprehensive Overview</h2>

      <section className="lr-section">
        <h3>📌 Definition</h3>
        <p>
          Linear regression is a statistical method used to model the relationship between a dependent variable (target) and one or more independent variables (predictors) by fitting a linear equation to the observed data.
        </p>
      </section>

      <section className="lr-section">
        <h3>🎯 Key Points</h3>
        <ul>
          <li>Predict numerical outcomes and understand variable relationships.</li>
          <li><strong>Assumptions:</strong> Linearity, independence, constant variance, normality, no multicollinearity.</li>
        </ul>
      </section>

      <section className="lr-section">
        <h3>📐 Equations</h3>
        <p><strong>Simple Linear:</strong> y = β₀ + β₁x + ϵ</p>
        <p><strong>Multiple Linear:</strong> y = β₀ + β₁x₁ + β₂x₂ + … + βₙxₙ + ϵ</p>
      </section>

      <section className="lr-section">
        <h3>📊 Evaluation Metrics</h3>
        <ul>
          <li>R², Adjusted R²</li>
          <li>MSE, RMSE</li>
        </ul>
      </section>

      <section className="lr-section">
        <h3>📂 Types</h3>
        <ul>
          <li>Simple Linear Regression</li>
          <li>Multiple Linear Regression</li>
          <li>Polynomial Regression</li>
          <li>Regularized Regression (Ridge, Lasso, Elastic Net)</li>
          <li>Logistic Regression (classification, not truly linear)</li>
        </ul>
      </section>

      <section className="lr-section">
        <h3>📈 Example</h3>
        <p>
          Predict a student’s score based on hours studied.<br/>
          Model: y = 50 + 4x → For 7 hours → Score = 78
        </p>
      </section>

      <section className="lr-section">
        <h3>✅ Advantages</h3>
        <ul>
          <li>Easy to implement and interpret</li>
          <li>Computationally efficient</li>
          <li>Provides insights into feature importance</li>
        </ul>
      </section>

      <section className="lr-section">
        <h3>⚠️ Limitations</h3>
        <ul>
          <li>Assumes linearity</li>
          <li>Sensitive to outliers</li>
          <li>Can overfit without regularization</li>
        </ul>
      </section>

      <section className="lr-section">
        <h3>🌍 Applications</h3>
        <ul>
          <li>Economics: Predicting GDP</li>
          <li>Healthcare: Estimating recovery time</li>
          <li>Marketing: Forecasting sales</li>
          <li>Engineering: Modeling material strength</li>
        </ul>
      </section>
    </div>
  );
}

export default LinearRegression;
