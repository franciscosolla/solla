import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import getFirebaseAuth from "../firebase/getFirebaseAuth";

export default function useUser() {
  const [user, setUser] = useState(getFirebaseAuth().currentUser);

  useEffect(() => onAuthStateChanged(getFirebaseAuth(), setUser), []);

  return user;
}