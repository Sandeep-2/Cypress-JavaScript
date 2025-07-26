Feature: End-To-End application validation
application Regression
Scenario: Ecommerce product delivery
Given I opened ecommerce page
When I add items to cart
And validate the cart value
Then select the country, submit it and verify



Feature Description