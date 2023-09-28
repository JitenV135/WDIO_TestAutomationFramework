import getInviteId from "../../../api/catalyst/actions/getInviteId.js";
import removeInvite from "../../../api/catalyst/actions/removeInvite.js";

const cleanInvite = async (email: string) => {
  const inviteId = await getInviteId(email);
  const removedId = await removeInvite(inviteId);
  console.log(cleanInvite.name.toUpperCase(), 'REMOVED ID:', removedId);
}

export default cleanInvite;