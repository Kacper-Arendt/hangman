import { useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import { FirebasePath } from '../models';
import { updateAuthDocument, updateDocument } from '../firebase';

interface ISaveDoc<T> {
	path: FirebasePath;
	id: string;
	data: T;
	editAuth?: boolean;
}

interface IResponse {
	response: DocumentData | undefined;
	loading: boolean;
	onSubmit: () => void;
}

export const useUpdateFirestoreDoc = <T>({ data, id, path, editAuth }: ISaveDoc<T>): IResponse => {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState<DocumentData>();
	const name = Object.keys(data)[0];
	const value = Object.values(data)[0];

	const onSubmit = async () => {
		try {
			setLoading(true);
			if (id && path) {
				if (editAuth) {
					await updateAuthDocument(name, value);
				}
				const respData = await updateDocument<T>(path, id, data);
				respData && setResponse(respData);
			}
		} catch (err: any) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	return { loading, response, onSubmit };
};
