export type MessageState = {
  id?: number;
  content: string;
  isUser: boolean;
  username?: string;
  createdAt?: Date;
};
