export interface IUser {
  id: string;
  name: string;
  avatarURL: string;
  answers: string[];
  polls: string[];
}

export interface IUsers {
  [index: string]: IUser;
}

export interface IPoll {
  id: string;
  question: string;
  author: string;
  timestamp: number;
  aText: string;
}

export interface IPolls {
  [index: string]: IPoll;
}
