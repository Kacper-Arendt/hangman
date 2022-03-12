import { FirebasePath } from '../models';
import { uploadPhoto } from '../firebase';
import { updateData, useAppDispatch } from '../redux';
import { useState } from 'react';

export const useUpdateUserPhoto = (id: string, img: any) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useAppDispatch();

	const upload = async () => {
		try {
			setLoading(true);
			const imgRef = await uploadPhoto(FirebasePath.users, id, img);
			if (imgRef) {
				dispatch(updateData({ id, data: { photoURL: imgRef }, path: FirebasePath.users }));
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	return { upload, loading };
};
