import getEmailContent from "../../utils/api/mailslurp/actions/getEmailContent.js";
import { testData, TestType } from "../../utils/data/testData.js"

const isEmailReceived = async () => {
  const type = testData.getType(browser.sessionId);
  const inboxId = testData.getData(browser.sessionId);
  let value;

  switch (true) {
    case (type === TestType.channelEmailInvite):
      value = 'You’ve been invited to join Proof';
      break;
    default:
      value;
  }

  const emailSubject = await getEmailContent(inboxId,'subject');

  expect(emailSubject).toContain(value);
}

export default isEmailReceived;