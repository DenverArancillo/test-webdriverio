@login
Feature: The Internet Guinea Pig Website

	Scenario Outline: As a user, I can log into the secure area
		Given I am on the login page of saucedemo.com
		When I login with <username> and secret_sauce
		Then I verify header text is "Products" and elements are present
		And I verify that inventory page elements are present
		Examples:
			| username                |
			| standard_user           |
			# | problem_user            |
			# | error_user              |
			# | performance_glitch_user |
