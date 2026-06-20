Feature: Generic watchlist

@smoke
  Scenario: Validate watchlist area
    Given I open the mb.io home page on desktop
    And I navigate to explore section
    Then watchlist is displayed with categories Hot, Gainers, Losers
    And Market sentiment is displayed
    And Market sentiment score is displayed
