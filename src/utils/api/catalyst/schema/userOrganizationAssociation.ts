import { API } from "../../api.utils.js";

class UserOrganizationAssociation extends API {

  constructor() {
    super();
  }

  async findIdByUserId(id: string) {
    return await API.catalystRequest({
      query: `
              query findUserOrganizationAssociations($query: QueryUserOrganizationAssociationInput){
                findUserOrganizationAssociations(query: $query){
                  id
                }
              }
            `,
      variables: {
        query: {user: id}
      },
    });
  }

  async removeUserOrganizationAssociation(id: string) {
    console.log(`UserOrgAssocRemove Id: ${id}`);
    return await API.catalystRequest({
      query: `
              mutation removeUserOrganizationAssociation($id: String!){
                removeUserOrganizationAssociation(id:$id){
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

export default UserOrganizationAssociation;