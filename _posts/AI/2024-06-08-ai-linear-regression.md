---
title: AI - Linear Regression
date: 2024-06-08 14:00:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---
**Linear Regression** is a core statistical technique in machine learning and data analysis, used to model the relationship between a target variable $y$ (dependent variable) and one or more predictors $x$ (independent variables or features). Its main objective is to determine the best-fitting line, represented by a slope $m$ and intercept $b$, that can accurately predict the target variable $y$ based on the input features $x$. The line follows the equation:

$$
y = mx + b
$$

### Linear Regression Demonstration ###
This application demonstrates linear regression, a statistical method for modeling the relationship between two variables by fitting a straight line to the data points. The regression line is defined by the **slope (m)** and **y-intercept (b)**, which describe how changes in the independent variable impact the dependent variable. The **R² (coefficient of determination)** value indicates the accuracy of the model, with a higher R² meaning a better fit.

The model aims to find the best-fitting line by adjusting the slope \( m \) and intercept \( b \) to match the data as closely as possible. This line is represented by the equation \( y = mx + b \). Each adjustment to \( m \) and \( b \) is made to reduce the **error**, or difference, between the actual data points and the values predicted by the line. The goal is to minimize these errors across all points, creating a line that represents the overall trend in the data as accurately as possible.

<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/ai-linear-regression.html" width="110%" height="1000px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>

### Key Components
+ Dependent Variable (Y):
  + The variable you are trying to predict or explain.

+ Independent Variable (X):
  + The variable you are using to make predictions.

+ Linear Equation:
  + The relationship is modeled as a linear equation

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \ldots + \beta_n X_n
$$

  + $(\beta_0\)$ is the intercept (the value of $Y$ when all $Xs$ are 0).

+ $(\beta_1, \beta_2, \ldots, \beta_n)$ are the coefficients (the change in $Y$ for a one-unit change in each $X$).



### How It Works
+ Fit a Line:

  + Linear regression finds the best-fitting line (or hyperplane in multiple dimensions) through the data points.

+ Ordinary Least Squares (OLS):

  + The most common method to find the regression line is the Ordinary Least Squares (OLS) method, which minimizes the sum of the squared differences (residuals) between observed values and the values predicted by the line.
  
  + Interpretation:

The coefficients $(\beta_1, \beta_2, \ldots, \beta_n)$ indicate the strength and direction of the relationship between each independent variable and the dependent variable.
The intercept $\beta_0$ indicates the expected value of $(Y)$ when all $(X)$ are zero.

### Applications
+ Predictive Modeling: Used to predict outcomes based on historical data.
+ Trend Analysis: Helps in identifying trends and relationships in data.
+ Risk Management: Assists in assessing risks and forecasting future trends.

### Example
Given a dataset of house prices $(Y)$ based on their size $(X)$, linear regression can help predict the price of a house based on its size.

### Conclusion
Linear regression is a simple yet powerful tool for understanding and predicting the relationship between variables. It forms the basis for many more complex statistical models and machine learning algorithms.


