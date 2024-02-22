import { API } from "../../api.utils.js";

class User extends API {

  constructor() {
    super();
  }

  async findIdByEmail(email: string) {
    return await API.catalystRequest({
      query: `
              query findUsers($query: QueryUserInput!){
                findUsers(query: $query){
                  id
                }
              }
            `,
      variables: {
        query: {email: email}
      }
    });
  }

  async changePassword(id: string, oldPassword: string, newPassword: string) {
    return await API.catalystRequest({
      query: `
              mutation changePassword($id: String!, $oldPassword: String!, $newPassword: String!){
                changePassword(id: $id, oldPassword: $oldPassword, newPassword: $newPassword){
                  id
                }
              }
            `,
      variables: {
        id: id,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }
    });
  }

  async removeUser(id: string) {
    return await API.catalystRequest({
      query: `
              mutation removeUser($id: String!) {
                removeUser(id: $id) {
                  id
                }
              }
            `,
      variables: {
        id: id,
      }
    });
  }
}

export default User;