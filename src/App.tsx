import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// COMPONENTS
import { Login, Profile, Register } from './components/auth';
import { Game } from './components/game';
import { useAuth } from './hooks';
import { Nav } from './components/nav';

const Wrapper = styled.div`
	height: 100vh;
`;

function App() {
	useAuth();

	return (
		<Wrapper>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/">
						<Route index element={<Game />} />
						<Route path="register" element={<Register />} />
						<Route path="login" element={<Login />} />
						<Route path="profile" element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}

export default App;
