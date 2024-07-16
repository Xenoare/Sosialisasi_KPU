import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  addDoc,
  getFirestore,
} from "firebase/firestore";

import { db } from "./clientApp";

interface ceb {}

export async function getAllLocations(path: string, data: ceb) {
  const locationRef = collection(db, "locations", path, "tps");
}

export async function uploadLocationData() {}
export async function updateLocationData() {}
