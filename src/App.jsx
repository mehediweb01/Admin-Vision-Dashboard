import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SideSection from "./Sidevar/SideSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideSection/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
