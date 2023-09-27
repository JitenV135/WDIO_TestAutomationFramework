import { API } from "../../api.utils.js";

export class Email extends API {

  constructor() {
    super();
  }

  async getLatestEmail(inboxId: string){
    return await API.mailslurpRequest({
      query: `
              query waitForLatestEmail($inboxId: String!, $timeout: Int!, $unreadOnly: Boolean!){
                waitForLatestEmail(inboxId: $inboxId, timeout: $timeout, unreadOnly: $unreadOnly){
                  subject,
                  body
                }
              }
            `,
      variables: {
        inboxId: inboxId,
        timeout: 5000,
        unreadOnly: true,
      }
    });
  }
}