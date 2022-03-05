import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// COMPONENTS
import { Login, Register } from "components/auth";

const Wrapper = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
