import getInviteId from "../../../api/catalyst/actions/getInviteId.js";
import removeInvite from "../../../api/catalyst/actions/removeInvite.js";

const cleanInvite = async (email: string) => {
  const inviteId = await getInviteId(email);
  const removedId = await removeInvite(inviteId);
  return removedId;
}

export default cleanInvite;