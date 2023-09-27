import Invite from "../schema/invite.js";

const getInviteId = async (email: string) => {
  const InviteAPI = new Invite();
  let invite;
  try {
    invite = await InviteAPI.findIdsByEmail(email);
  } catch (err) {
    console.log(`ERROR WITH ${InviteAPI.findIdsByEmail.name}`)
  }
  const inviteId = invite.data.findInvites[0].id as string;

  return inviteId;
} 

export default getInviteId;