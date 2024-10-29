Feature: Test the QM contact page

Scenario: Fields to fill in contact details do exist
    Given I am on the qm contact page
    Then I see that the contact fields do exist

@dummyTag
Scenario: When I do something wrong, error messages are displayed
    Given I am on the qm contact page
    When I try to send incomplete contact details
    Then I see the contact error message
