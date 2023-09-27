import openWebpage from "../openWebpage.js";
import setInput from "../setInput.js";
import clickElement from "../cilckElement.js";

const appLogin = async (userType?: string, orgType?: string) => {
  let email;
  let password = 'valid app password';

  switch (true) {
    case ((userType === 'admin') && (orgType === 'parent')): {
      email = 'valid app admin parent email';
    }
      break;
    case ((userType === 'admin') && (orgType === 'child')): {
      email = 'valid app admin child email';
    }
      break;
    default: {
      email = 'test';
      password = 'test';
    }
  }

  await openWebpage('app login', 'page');
  await setInput('enter', email, 'Login-Page-Email-Input');
  await setInput('enter', password, 'Login-Page-Password-Input');
  await clickElement('click', 'Login-Page-Login-To-My-Account-Button');
}

export default appLogin;