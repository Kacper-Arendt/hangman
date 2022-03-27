import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// HOOKS
import { useAuth } from './hooks';

// COMPONENTS
import { Nav } from './components/nav';
import { GlobalAlert } from './coreUI/elements/alerts/views/GlobalAlert';

// PAGES
import { Login, Profile, Register } from './components/auth';
import { Game } from './components/game';
import { Multiplayer } from './components/multiPlayer';
import { StartMultiplayer } from './components/multiPlayer/sections';

const Wrapper = styled.div`
	height: 100vh;
`;

function App() {
	useAuth();

	return (
		<Wrapper>
			<GlobalAlert />
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/">
						<Route index element={<Game />} />
						<Route path="register" element={<Register />} />
						<Route path="login" element={<Login />} />
						<Route path="profile" element={<Profile />} />
						<Route path="multiplayer">
							<Route index element={<StartMultiplayer />} />
							<Route path=":id" element={<Multiplayer />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}

export default App;
