import Invite from "../schema/invite.js";

const removeInvite = async (id: string) => {
  const InviteAPI = new Invite();
  let removedResponse;

  try {
    removedResponse = await InviteAPI.removeInvite(id);
  } catch (err) {
    console.log(`ERROR WITH ${InviteAPI.removeInvite.name}`)
  }

  const removedId = removedResponse.data.removeInvite.id as string;

  return removedId;
}

export default removeInvite;