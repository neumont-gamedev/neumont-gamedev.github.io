---
title: AI - Logistic Regression
date: 2024-06-08 14:00:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---

**Logistic Regression** is a statistical method used for binary classification problems. It predicts the probability that a given input belongs to a particular class. Unlike linear regression, which predicts continuous values, logistic regression is used to predict categorical outcomes, typically binary outcomes such as 0 or 1, true or false, yes or no.

#### Key Components ####

**Binary Classification:**

+ Logistic regression is primarily used for binary classification, where the target variable has two possible outcomes.

**Logistic Function (Sigmoid Function):**

+ The logistic function, also known as the sigmoid function, is used to map predicted values to probabilities. It has the form:
  
$$
\begin{equation}
\sigma(z) = \frac{1}{1 + e^{-z}}
\end{equation}
$$

+ The output of the sigmoid function is always between 0 and 1, making it suitable for probability estimation.

**Model Equation:**

+ The logistic regression model estimates the probability $P(Y = 1)$ as: 

\begin{equation}
P(Y = 1 \mid X) = \sigma(\beta_0 + \beta_1 X_1 + \beta_2 X_2 + \ldots + \beta_n X_n)
\end{equation}

Here, $(\beta_0\)$ is the intercept, and $(\beta_1, \beta_2, \ldots, \beta_n\)$ are the coefficients for the predictor variables $(X_1, X_2, \ldots, X_n\)$.

**Decision Boundary:**

+ The decision boundary is determined by the threshold value (commonly 0.5). If the predicted probability is greater than or equal to 0.5, the output is classified as 1; otherwise, it is classified as 0.

**Gradient Descent:**

+ Gradient descent is often used to find the optimal parameters (coefficients) that minimize the cost function. The cost function in logistic regression is the log-loss or binary cross-entropy.

<div style="text-align: center; max-width: 100%; margin: 0 auto;">
    <iframe 
        src="{{ site.baseurl }}/assets/pages/ai-logistic-regression.html" 
        style="width: 100%; max-width: 1200px; height: 900px; border: none; overflow: hidden;"
        scrolling="no"
        title="Logistic Regression Interactive Graph">
        Your browser does not support iframes.
    </iframe>
</div>

#### Applications ####
+ Medical Diagnosis: Predicting the presence or absence of a disease.
+ Spam Detection: Classifying emails as spam or not spam.
+ Customer Churn: Predicting whether a customer will stay or leave a service.
+ Credit Scoring: Assessing the probability of a customer defaulting on a loan.

#### Conclusion ####
Logistic regression is a simple yet powerful tool for binary classification problems. It provides probabilities and a clear decision boundary, making it useful for many real-world applications. Its foundation in statistics and straightforward implementation make it a popular choice for binary classification tasks in machine learning.
