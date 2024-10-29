@dummyTag
Feature: Test the QM Main Page

    Scenario: Check links to sub pages
        Given I am on the QM homepage
        When I check all sub page links
        Then I see that all links lead to the corect sub pages