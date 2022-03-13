import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { FirebasePath } from '../models';

export const uploadPhoto = async (path: FirebasePath, id: string, img: any): Promise<any> => {
	try {
		const storage = getStorage();
		const photoRef = ref(storage, `${path}/${id}`);
		const upload = uploadBytesResumable(photoRef, img, { contentType: 'image/jpeg' });
		return await getDownloadURL(upload.snapshot.ref);
	} catch (e) {
		console.log(e);
	}
};
