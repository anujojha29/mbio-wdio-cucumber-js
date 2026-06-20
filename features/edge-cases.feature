Feature: Negative and edge cases
  
  Scenario: Validate invalid route handling
    When I open an invalid route
    Then the application should handle the invalid route gracefully

  Scenario: Validate mobile viewport behavior
    Given I open the mb.io home page on mobile view
    Then the header should still be visible

  Scenario: Validate visible navigation links are not empty
    Given I open the mb.io home page on desktop
    Then visible navigation links should have href attributes
