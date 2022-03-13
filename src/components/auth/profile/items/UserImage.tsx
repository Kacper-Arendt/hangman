import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

// COMPONENTS
import { useUpdateUserPhoto } from '../../../../hooks/useUpdateUserPhoto';

// STYLES
import { Spinner } from '../../../../coreUI';

const StyledWrapper = styled.form`
	position: relative;

	input {
		display: none;
	}
`;

const StyledUserImage = styled.img`
	border-radius: 100%;
	object-fit: cover;
	width: 10rem;
	height: 10rem;
`;

const StyledUserIcon = styled(FaUserCircle)`
	font-size: 10rem;
	fill: ${({ theme }) => theme.accent3};
`;

const StyledEditIcon = styled.span`
	position: absolute;
	top: 0;
	right: 0;

	svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
`;

interface Props {
	id: string;
	alt?: string | null;
	src?: string | null;
}

export const UserImage = ({ alt, src, id }: Props) => {
	const [photo, setPhoto] = useState<{ url: string | null; file: string | null }>({ url: null, file: null });
	const { upload, loading } = useUpdateUserPhoto(id, photo.file);

	const onImageChange = (e: any) => {
		if (e.target.files && e.target.files[0]) {
			setPhoto({
				file: e.target.files[0],
				url: URL.createObjectURL(e.target.files[0]),
			});
		}
	};

	useEffect(() => {
		photo.file && upload();
	}, [photo]);

	useEffect(() => {}, [photo, upload]);

	return (
		<StyledWrapper>
			<label>
				<StyledEditIcon>{loading ? <Spinner size={1.5} /> : <MdOutlineAddAPhoto />}</StyledEditIcon>
				<input accept="image/*" type="file" onChange={onImageChange} />
			</label>
			{src && alt ? <StyledUserImage src={src} alt={alt} /> : <StyledUserIcon />}
		</StyledWrapper>
	);
};
