import { API } from "../../api.utils.js";

class Invite extends API {

  constructor() {
    super();
  }

  async findIdsByEmail(email: string) {
    return await API.catalystRequest({
      query: `
              query findInvites($query: QueryInviteInput!){
                findInvites(query: $query){
                  id
                }
              }
            `,
      variables: {
        query: {email: email}
      }
    });
  }

  async findEmailByid(id: string) {
    return await API.catalystRequest({
      query: `
              query findInvites($query: QueryInviteInput!){
                findInvites(query: $query){
                  email
                }
              }
            `,
      variables: {
        query: {id: id}
      }
    });
  }

  async removeInvite(id: string) {
    return await API.catalystRequest({
      query: `
              mutation removeInvite($id: String!) {
                removeInvite(id: $id) {
                  id
                }
              }
           `,
      variables: {
        id: id,
      },
    });
  }
}

export default Invite;