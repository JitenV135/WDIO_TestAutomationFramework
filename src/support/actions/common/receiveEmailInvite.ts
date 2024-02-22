import adminLogin from "./adminLogin.js";
import clickElement from "../cilckElement.js";
import setInput from "../setInput.js";
import logout from "./logout.js";


const receiveEmailInvite = async () => {
  await adminLogin();
  await clickElement('click', 'Organizations-Page-Organization-Invites-Link');
  await clickElement('click', 'Organization-Invites-Page-Email-Invite-Button');
  await setInput('enter', 'test email', 'Email-Organization-Invite-Modal-Email-Input');
  await clickElement('click', 'Email-Organization-Invite-Modal-Product-Tier-Dropdown');
  await clickElement('click', 'Email-Organization-Invite-Modal-Product-Tier-Dropdown-TEST-PRODUCT-Option');
  await clickElement('click', 'Email-Organization-Invite-Modal-Consultant-Partner-Dropdown');
  await clickElement('click', 'Email-Organization-Invite-Modal-Consultant-Partner-Dropdown-TEST-CONSULTANT-PARTNER-Option');
  await setInput('enter', '5', 'Email-Organization-Invite-Modal-Number-Of-Seats-Input');
  await clickElement('click', 'Email-Organization-Invite-Modal-Invite-Button');
  await clickElement('click', 'Send-Invitation-Success-Alert-Modal-Close-Button');
  await logout();
}

export default receiveEmailInvite;