import { Inbox } from "../schema/inbox.js";

const deleteInbox = async (inboxId: string) => {
  const InboxAPI = new Inbox();

  try {
    await InboxAPI.delete(inboxId);
  } catch (err) {
    console.log(`ERROR WITH ${InboxAPI.delete.name}`)
  }
}

export default deleteInbox;