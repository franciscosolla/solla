import { getAuth } from "@firebase/auth";
import getFirebaseApp from "./getFirebaseApp";

export default function getFirebaseAuth() {
  return getAuth(getFirebaseApp());
}