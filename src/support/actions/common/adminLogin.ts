import openWebpage from "../openWebpage.js";
import setInput from "../setInput.js";
import clickElement from "../cilckElement.js";

const adminLogin = async (userType?: string) => {
  let email;
  let password = 'valid admin password';

  switch (userType) {
    case 'admin': {
      email = 'valid admin email';
    }
      break;
    default: {
      email = 'valid admin email';
    }
  }

  await openWebpage('admin panel login', 'page');
  await setInput('enter', email, 'Login-Page-Email-Input');
  await setInput('enter', password, 'Login-Page-Password-Input');
  await clickElement('click', 'Login-Page-Login-To-My-Account-Button');
}

export default adminLogin;