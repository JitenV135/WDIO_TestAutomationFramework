import { Email } from "../email";

const getEmailContent = async (inboxId: string, contentType: 'link'|'otp', linkType?: string) => {
  const EmailAPI = new Email();
  let email;

  try {
    email = await EmailAPI.getLatestEmail(inboxId);
  } catch (err) {
    console.log(`ERROR WITH ${EmailAPI.getLatestEmail.name}`)
  }

  const emailBody = email.data.waitForLatestEmail.body as string;

  let el = document.createElement('html');

  el.innerHTML = emailBody;

  if (contentType === 'link' && linkType) {
    const link = el.querySelector('a[data-testid]')?.getAttribute('href');
    return link;
  } else if (contentType === 'otp') {
    const otp = el.querySelector('span[data-testid]')?.innerHTML;
    return otp;
  } else {
    console.log(`ERROR WITH ${getEmailContent.name}`)
  }
}

export default getEmailContent;