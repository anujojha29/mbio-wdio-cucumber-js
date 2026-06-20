Feature: Navigation and layout

  Scenario: Validate top navigation items on desktop
    Given I open the mb.io home page on desktop
    Then the top navigation should display expected items
    | Explore  |
    | Features |
    | OTC Desk |
    | Company  |
    | Support  |
    | $MBG     |
    And each expected navigation item should link to the correct destination
    |navitems | link                        |
    |Explore  | /en/explore                 |
    |Features | /en/features                |
    |OTC Desk | /en/features/otc-desk       |
    |Company  | /en/company                 |
    |Support  | /en/support                 |
    |$MBG     | token.multibankgroup.com/en |

    
