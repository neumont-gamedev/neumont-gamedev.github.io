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
This application demonstrates linear regression, a statistical method for modeling the relationship between two variables by fitting a straight line to the data points. The regression line is defined by the **slope $m$** and **y-intercept $b$**, which describe how changes in the independent variable impact the dependent variable. The **R² (coefficient of determination)** value indicates the accuracy of the model, with a higher R² meaning a better fit.

The model aims to find the best-fitting line by adjusting the slope $m$ and intercept $b$ to match the data as closely as possible. This line is represented by the equation $y = mx + b$. Each adjustment to $m$ and $b$ is made to reduce the **error**, or difference, between the actual data points and the values predicted by the line. The goal is to minimize these errors across all points, creating a line that represents the overall trend in the data as accurately as possible.

<div style="text-align: center; max-width: 100%; margin: 0 auto;">
    <iframe 
        src="{{ site.baseurl }}/assets/pages/ai-linear-regression.html" 
        style="width: 100%; max-width: 1200px; height: 800px; border: none; overflow: hidden;"
        scrolling="no"
        title="Linear Regression Interactive Graph">
        Your browser does not support iframes.
    </iframe>
</div>

### Linear Regression Formula

For a single independent variable, the linear regression equation is:

$$
\hat{y} = b_0 + b_1 x
$$

Where:

- $\hat{y}$: Predicted value of the dependent variable.
- $b_0$: Intercept of the regression line; the value of $\hat{y}$ when $x = 0$.
- $b_1$: Slope of the regression line; represents the change in $\hat{y}$ for a one-unit change in $x$.
- $x$: Independent variable.

#### Steps to Derive the Regression Coefficients ($b_0$ and $b_1$):

1. **Calculate the Means:**
   - Compute the mean of the independent variable ($\bar{x}$) and the dependent variable ($\bar{y}$).

2. **Compute the Slope ($b_1$):**

   $$
   b_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2}
   $$

   Where $n$ is the number of data points, $x_i$ and $y_i$ are the individual sample points.

3. **Compute the Intercept ($b_0$):**

   $$
   b_0 = \bar{y} - b_1 \bar{x}
   $$

### Example:

Suppose we have the following dataset:

| $x$ (Independent Variable) | $y$ (Dependent Variable) |
|----------------------------|--------------------------|
| 1                          | 2                        |
| 2                          | 3                        |
| 4                          | 7                        |
| 5                          | 5                        |
| 7                          | 11                       |

#### Calculate the Means:

+ $
\bar{x} = \frac{1 + 2 + 4 + 5 + 7}{5} = 3.8
$

+ $
\bar{y} = \frac{2 + 3 + 7 + 5 + 11}{5} = 5.6
$

#### Compute the Slope ($b_1$):

+ $
b_1 = \frac{(1 - 3.8)(2 - 5.6) + (2 - 3.8)(3 - 5.6) + (4 - 3.8)(7 - 5.6) + (5 - 3.8)(5 - 5.6) + (7 - 3.8)(11 - 5.6)}{(1 - 3.8)^2 + (2 - 3.8)^2 + (4 - 3.8)^2 + (5 - 3.8)^2 + (7 - 3.8)^2}
$

+ $
b_1 = \frac{(-2.8)(-3.6) + (-1.8)(-2.6) + (0.2)(1.4) + (1.2)(-0.6) + (3.2)(5.4)}{(-2.8)^2 + (-1.8)^2 + (0.2)^2 + (1.2)^2 + (3.2)^2}
$

+ $
b_1 = \frac{10.08 + 4.68 + 0.28 - 0.72 + 17.28}{7.84 + 3.24 + 0.04 + 1.44 + 10.24}
$

+ $
b_1 = \frac{31.6}{22.8} \approx 1.386
$

#### Compute the Intercept ($b_0$):

+ $
b_0 = \bar{y} - b_1 \bar{x}
$

+ $
b_0 = 5.6 - 1.386 \times 3.8
$

+ $
b_0 = 5.6 - 5.271
$

+ $
b_0 \approx 0.329
$

#### Regression Equation:

Thus, the regression equation is:

$
\hat{y} = 0.329 + 1.386x
$

This equation can be used to predict the value of $y$ for any given $x$ within the range of the data.

### Applications
+ Predictive Modeling: Used to predict outcomes based on historical data.
+ Trend Analysis: Helps in identifying trends and relationships in data.
+ Risk Management: Assists in assessing risks and forecasting future trends.

### Example
If we have a simple linear regression model predicting **house prices** based on **square footage**:

$$
y = mx + b
$$

- $y$ = predicted house price
- $x$ = square footage of the house
- $m$ = slope indicating how much the house price increases per additional square foot
- $b$ = y-intercept, representing the base price when the square footage is zero

The model would then try to "fit" a line that best matches the pattern in the data, allowing it to make predictions for new houses based on square footage.

### Conclusion
Linear regression is a simple yet powerful tool for understanding and predicting the relationship between variables. It forms the basis for many more complex statistical models and machine learning algorithms.


