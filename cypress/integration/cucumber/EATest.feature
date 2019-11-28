Feature: EATestFeature
    Test
    Scenario: Test the login feature
        Given I visit EA site
        Given I click login link
        And I login as a user with "admin" and "password"