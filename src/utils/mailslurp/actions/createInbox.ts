import { Inbox } from "../inbox.js";

const createInbox = async () => {
  const InboxAPI = new Inbox();
  let inbox;

  try {
    inbox = await InboxAPI.create();
  } catch (err) {
    console.log(`ERROR WITH ${InboxAPI.create.name}`)
  }

  const inboxID = inbox.data.createInbox.id as string;

  return inboxID;
}

export default createInbox;