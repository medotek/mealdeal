import {FirebaseUser} from "@ionic-native/firebase-x";

export class User {
  _id?: number;
  uid?:  string;
  nickname: string;
  creationDate: Date;
}
