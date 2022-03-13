import React from 'react';
import { Input } from '../../../../coreUI';
import { useField } from '../../../../hooks';
import { useUpdateFirestoreDoc } from '../../../../hooks/useUpdateFirestoreDoc';
import { FirebasePath } from '../../../../models';

interface Props {
	id: string;
	title: string;
	name: string;
	value: string;
	type?: 'text' | 'email';
	editAuth?: boolean;
}

export const SingleForm = ({ id, title, name, value, type = 'text', editAuth }: Props) => {
	const { handleChange, fields } = useField({ [name]: value });
	const { onSubmit, loading } = useUpdateFirestoreDoc<{ [name: string]: string }>({
		id,
		path: FirebasePath.users,
		data: { [name]: fields[name] },
		editAuth,
	});
	const onSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<Input
				onChange={handleChange}
				title={title}
				name={name}
				btnType="submit"
				type={type}
				loading={loading}
				value={loading ? 'loading...' : fields[name]}
			/>
		</form>
	);
};
