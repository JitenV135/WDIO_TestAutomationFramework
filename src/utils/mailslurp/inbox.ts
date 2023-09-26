import { API } from "../api.utils";

export class Inbox extends API {

  constructor() {
    super();
  }

  async create(){
    return await API.mailslurpRequest({
      query: `
              mutation createTestInbox($name: String!){
                createInbox(name: $name){
                  id
                }
              }
            `,
      variables: {
        name: 'TEST INBOX'
      }
    });
  }

  async delete(inboxId: string){
    return await API.mailslurpRequest({
      query: `
              mutation deleteInbox($inboxId: String!){
                deleteInbox(inboxId: $inboxId)
              }
            `,
      variables: {
        inboxId: inboxId
      }
    });
  }
}