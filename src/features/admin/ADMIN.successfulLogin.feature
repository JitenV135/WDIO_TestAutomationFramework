Feature: Logging in to the admin

  Scenario Outline: Login and land on the Organizations page

    Given I open the admin panel login page
    When I enter valid admin email in the Login-Page-Email-Input
    And I enter valid admin password in the Login-Page-Password-Input
    And I click the Login-Page-Login-To-My-Account-Button
    Then I see the Navbar-Breadcrumb-Organizations-Link displayed