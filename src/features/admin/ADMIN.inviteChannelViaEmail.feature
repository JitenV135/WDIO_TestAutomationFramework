Feature: Invite Channel User
  @channelEmailInvite
  Scenario Outline: Admin Panel User sends Channel invite email
    Given I login to the admin panel
    When I click the Organizations-Page-Organization-Invites-Link
    And I click the Organization-Invites-Page-Email-Invite-Button
    And I enter <email> in the Email-Organization-Invite-Modal-Email-Input
    And I click the Email-Organization-Invite-Modal-Product-Tier-Dropdown
    And I click the Email-Organization-Invite-Modal-Product-Tier-Dropdown-<product type>-Option
    And I click the Email-Organization-Invite-Modal-Consultant-Partner-Dropdown
    And I click the Email-Organization-Invite-Modal-Consultant-Partner-Dropdown-<consultant partner type>-Option
    And I enter <number of seats> in the Email-Organization-Invite-Modal-Number-Of-Seats-Input
    And I click the Email-Organization-Invite-Modal-Invite-Button
    And I click the Send-Invitation-Success-Alert-Modal-Close-Button
    Then I expect the email to be received

    Examples:
      | email      | product type | consultant partner type | number of seats |
      | test email | TEST-PRODUCT | TEST-CONSULTANT-PARTNER | 5               |