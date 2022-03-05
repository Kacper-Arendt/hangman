import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// COMPONENTS
import { Login, Register } from "components/auth";
import { Game } from "components/game";

const Wrapper = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Game />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
