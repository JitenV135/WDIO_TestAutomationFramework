import clickElement from "../cilckElement.js";

const logout = async () => {
  browser.switchToFrame(null);
  await clickElement('click', 'Navbar-User-Profile-Button');
  await clickElement('click', 'Navbar-User-Profile-Dropdown-Sign-Out-Link');
}

export default logout;