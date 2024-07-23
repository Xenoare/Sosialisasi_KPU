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
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
  FieldValue,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "./clientApp";
import { promises } from "dns";

export interface Location {
  name: string;
  key: string;
  total: number;
  description: string;
  file: any;
  timestamp?: any;
}

const locationConverter = {
  toFirestore: (location: Location) => {
    return { ...location };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data() as Location;
    if (data.timestamp) {
      data.timestamp = data.timestamp.toDate();
    }
    return data;
  },
};

export async function uploadLocationData(data: Location) {
  try {
    const docRef = collection(db, `locations/${data.key}/posts`);
    const result = await addDoc(docRef, { data });
    console.log("Document written with ID: ", result.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function uploadRecentData(data: Location) {
  try {
    const docRef = collection(db, "recent");
    const result = await addDoc(docRef, { data });
  } catch (error) {
    console.error("Error adding docment", error);
  }
}

export async function updateLocation(path: string, id: string, data: Location) {
  let docRef = doc(collection(db, `locations/${path}/posts`), id);
  const reuslt = await setDoc(docRef, { data });
}

export async function getRecentLocation(): Promise<Location[]> {
  let q = query(collection(db, "recent").withConverter(locationConverter));

  const result = await getDocs(q);
  return result.docs.map((doc) => doc.data() as Location);
}

export async function getAllLocations(): Promise<Location[]> {
  let q = query(collection(db, "locations").withConverter(locationConverter)); // Use converter

  const result = await getDocs(q);
  return result.docs.map((doc) => doc.data() as Location);
}

export async function deleteLocationData(path: string, id: string) {
  let docRef = doc(collection(db, `locations/${path}/posts`), id);
  await deleteDoc(docRef);
}
