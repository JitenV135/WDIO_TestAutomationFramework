Feature: Login to the app
    
  Scenario Outline: Login and land on dashboard Home page

    Given I open the app login page
    When I enter valid app parent email in the Login-Page-Email-Input 
    And I enter valid app parent password in the Login-Page-Password-Input
    And I click the Login-Page-Login-To-My-Account-Button
    Then I see the Navbar-Breadcrumb-Quickstart-Link displayed
    And I see the Quickstart-Page-Welcome-Checklist displayed
    And I see the Quickstart-Page-Parent-Assessment-Checklist displayed