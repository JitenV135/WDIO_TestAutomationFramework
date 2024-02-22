Feature: Invite Team Member

  Background: Admin User is logged into the App
    Given I login to the app as the admin user of a parent organization
  
  @memberEmailInvite
  Scenario Outline: App Admin User sends Team Member invite
    When I click the Sidebar-Navigation-Settings-Link
    And I click the Settings-Page-Team-Link
    And I click the Settings-Team-Page-Invite-User-Button
    And I enter <email> in the Invite-User-Modal-Email-Input
    And I enter <username> in the Invite-User-Modal-Username-Input
    And I click the Invite-User-Modal-Send-User-Invite-Button
    And I click the Saved-Alert-Modal-Close-Button
    Then I expect the email to be received

    Examples:
      | email       | username    |
      | test email  | TEST MEMBER |