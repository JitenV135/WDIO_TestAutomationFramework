Feature: Test
  @1
  Scenario Outline: Test1
    Given I login to the app as the admin user of a child organization
    Then I see the Navbar-Breadcrumb-Quickstart-Link displayed
  @2
  Scenario Outline: Test2
    Given I login to the admin panel as the admin user
    Then I see the Navbar-Breadcrumb-Organizations-Link displayed