export const adminBehaviour = () => ({
  canBanUser: true,
  canEditChannel: false,
});

export const moderatorBehaviour = () => ({
  canBanUser: false,
  canEditChannel: true,
});
