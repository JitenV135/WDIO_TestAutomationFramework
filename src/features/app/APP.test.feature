Feature: Test
  @channelEmailInvit
  Scenario Outline: Test
    Given I login to the app as the admin user of a child organization
    # Given I login to the admin panel as the admin user
    Then I see the Navbar-Breadcrumb-Quickstart-Link displayed
    # Then I see the Navbar-Breadcrumb-Organizations-Link displayed
