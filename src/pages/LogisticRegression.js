import React from 'react';
import './LogisticRegression.css';

function LogisticRegression() {
  return (
    <div className="regression-container">
      {/* Title for the page */}
      <h1 className="page-title">Logistic Regression</h1>

      <div className="regression-section">
        <h3>📌 Definition</h3>
        <p>
          Logistic Regression is a classification algorithm used to predict the probability of a binary outcome based on one or more independent variables. It uses a logistic (sigmoid) function to map predicted values to probabilities.
        </p>
      </div>

      <div className="regression-section">
        <h3>🎯 Key Points</h3>
        <ul>
          <li>Used for binary classification problems (e.g., yes/no, true/false).</li>
          <li><strong>Assumptions:</strong> Binary output variable, linear relationship between logit of outcome and predictors, no multicollinearity.</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>⚠️ Equations</h3>
        <ul>
          <li><strong>Logit Function:</strong> log(p / (1 - p)) = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ</li>
          <li><strong>Sigmoid Function:</strong> p = 1 / (1 + e<sup>-(β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ)</sup>)</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>📊 Evaluation Metrics</h3>
        <ul>
          <li>Accuracy, Precision, Recall</li>
          <li>F1 Score, AUC-ROC Curve</li>
        </ul>
      </div>

      <div className="regression-section">
        <h3>💡 Example</h3>
        <p>
          Suppose you're building a model to predict whether a student will pass an exam based on their study hours and attendance.
        </p>
        <p><strong>Example Equation:</strong> log(p / (1 - p)) = -3 + 0.05×Hours + 0.1×Attendance</p>
        <p>
          The output <strong>p</strong> is the probability of passing the exam. If p ≥ 0.5, we classify the student as likely to pass.
        </p>
      </div>

      <div className="regression-section">
        <h3>📁 Applications</h3>
        <ul>
          <li>Medical diagnosis (e.g., predicting disease presence or absence).</li>
          <li>Email spam detection.</li>
          <li>Customer churn prediction.</li>
        </ul>
      </div>
    </div>
  );
}

export default LogisticRegression;
