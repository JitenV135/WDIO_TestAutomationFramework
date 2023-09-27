import { Email } from "../schema/email.js";

const getEmailContent = async (inboxId: string, contentType: 'link'|'otp'|'body'|'subject') => {
  const EmailAPI = new Email();
  const emailObject = {
    subject: '',
    body: '',
    link: '',
    otp: '',
  }

  let email;

  try {
    email = await EmailAPI.getLatestEmail(inboxId);
  } catch (err) {
    console.log(`ERROR WITH ${EmailAPI.getLatestEmail.name}`)
  }

  emailObject['subject'] = email.data.waitForLatestEmail.subject as string;
  emailObject['body'] = email.data.waitForLatestEmail.body as string;

  // let el = document.createElement('html');

  // el.innerHTML = emailObject['body'];

  // if (contentType === 'link') {
  //   emailObject['link'] = el.querySelector('a[data-testid]')?.getAttribute('href') as string;
  // }
  
  // if (contentType === 'otp') {
  //   emailObject['otp'] = el.querySelector('span[data-testid]')?.innerHTML as string;
  // }

  return emailObject[`${contentType}`];
}

export default getEmailContent;