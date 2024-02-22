Feature: Signup from Channel email invite

  Background: Channel User receives email invite
    Given I receive an email invite
    And I open the email Link

  @channelEmailSignup
  Scenario Outline: Scenario Outline name
    When I enter <firstname> in the Organization-Signup-Page-First-Name-Input
    And I enter <lastname> in the Organization-Signup-Page-Last-Name-Input
    And I enter <job title> in the Organization-Signup-Page-Job-Title-Input
    And I enter <org name> in the Organization-Signup-Page-Org-Name-Input
    And I enter valid app password in the Organization-Signup-Page-Password-Input
    And I enter valid app password in the Organization-Signup-Page-Confirm-Password-Input
    And I click the Organization-Signup-Page-Terms-Of-Service-And-Policy-Checkbox
    And I click the Organization-Signup-Page-Create-Account-Button
    Then I see the Navbar-Breadcrumb-Quickstart-Link displayed

    Examples:
      | firstname | lastname | job title | org name               |
      | TEST      | CHANNEL  | TEST      | AUTOMATED TEST CHANNEL |