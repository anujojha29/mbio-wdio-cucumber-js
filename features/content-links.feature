Feature: Banner, links and Aboout page

  Scenario: Validate banners and store links
    Given I open the mb.io home page on desktop
    Then marketing banners should be visible
    And the download app link should be available
    And the open account link should be available

  Scenario: Validate Why MultiBank content page
    Given I open the Why MultiBank page
    Then the Why MultiBank page should display expected headings
