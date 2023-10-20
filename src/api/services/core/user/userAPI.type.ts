export type UserInfoType = {
  id: number;
  name: string;
  nickname: string;
  birthday: string;
  phone: string;
  avatarUrl: string;
  loginAt: string;
  nicknameUpdatedAt: null;
  identities: [];
  isVerified: false;
  organizations: [];
};

export type CheckDuplicateUserNicknameParams = {
  nickname: string;
};
export type CheckDuplicateUserNicknameRes = {
  duplicate: boolean;
};

export type GetUserInfoParams = {};
export type GetUserInfoRes = UserInfoType;
