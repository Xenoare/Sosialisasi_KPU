import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "./clientApp";

export async function uploadLocationImage() {}

export async function updateLocationImage() {}

async function uploadImage(locationId: string, image: File): Promise<string> {
  const filePath = `images/${locationId}/${image.name}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, image);

  return await getDownloadURL(newImageRef);
}
