export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'tours' | 'hosts' | 'admin';
  status: 'open' | 'blocked';
  isDeleted: boolean;
};
