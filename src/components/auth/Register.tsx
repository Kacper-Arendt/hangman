import { Form } from '../../coreUI';

export const Register = () => (
	<Form
		name
		email
		buttonValue="Register"
		onSubmit={() => {}}
		linkPath="/login"
		linkValue="Login"
		linkText="Already have an account?"
	/>
);
